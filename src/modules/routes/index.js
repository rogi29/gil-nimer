export default function(model) {
    "use strict";
    return function(req, res) {
        model(req, function(data) {
            res.render('index', data);
        });
    }
}