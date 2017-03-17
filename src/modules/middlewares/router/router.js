export default function(obj, url) {
    "use strict";

    url = url.toString();

    var
        router,
        model   = obj.model.toString(),
        route   = obj.route.toString(),
        method  = obj.method.toString(),
        realURL = url.replace('*', '');

    model = require(`../../../${model}`).default || function(){};
    router = require(`../../../${route}`).default || function(model){};

    return {url: realURL, callback: router(model), method: method};
}