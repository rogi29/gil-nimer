
import express      from 'express';
import session      from 'express-session';
import bodyParser   from 'body-parser';
import template     from 'mustache-express';
import connectMongo from 'connect-mongo';
import errorHandler from './modules/middlewares/errorHandler/errorHandler';
import router       from './modules/middlewares/router/router';
import {
    app     as appConf,
    paths   as pathConf,
    routes  as routeConf
} from '../config';

export default function(){
    "use strict";

    const app = express();
    const mongoStore = connectMongo(session);
    // const mongoConf = JSON.parse(process.env.APP_CONFIG).mongo;
    const password = 'qetu1357zcbm./';

    let sess = {
        secret: '1112941997',
        //store: new mongoStore({ url: `mongodb://${mongoConf.user}:${password}@${mongoConf.hostString}` }),
        resave: true,
        saveUninitialized: true
    };

    app.engine('html', template());
    app.set('env', appConf.env);
    app.set('port', appConf.port);
    app.set('ip', appConf.ip);
    app.set('views', pathConf.html.dest);
    app.set('view engine', 'html');
    app.use('/'+ pathConf.builds.dest.uri, express.static(pathConf.builds.dest.dir));
    app.use(errorHandler.handler(app.get('env')));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(session(sess));

    for(var url in routeConf) {
        var route = router(routeConf[url], url);
        switch(route.method) {
            case 'get':
                app.get(route.url, route.callback);
                break;

            case 'post':
                app.post(route.url, route.callback);
                break;

            default:
                app.get(route.url, route.callback);
                break;
        }
    }

    app.listen(app.get('port'), app.get('ip'), function() {
        "use strict";

        console.log('App Started!');
    });
}