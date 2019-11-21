
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

const app = express();

let sess = {
    resave: true,
    saveUninitialized: true
};

app.engine('html', template());
app.set('env', appConf.env);
app.set('port', (process.env.PORT || appConf.port));
app.set('ip', (process.env.IP || appConf.ip));
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
