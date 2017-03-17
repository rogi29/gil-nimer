import index from './index';

export default function(req, callback){
    "use strict";
    index(req, function(data) {
        data['head']['title'] = data['head']['titles']['about'];
        callback(data);
    });
}