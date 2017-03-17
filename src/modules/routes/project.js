export default function(model) {
    "use strict";
    return function(req, res) {
        model(req, function(data) {
            data['head']['static'] = '../' + data['head']['static'];

            res.render('index', data);
        });
    }
}