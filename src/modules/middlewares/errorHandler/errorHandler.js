var express = require('express'),
    router  = express.Router(),
    errors  = {
        devError: function () {
            return function (err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            };
        },

        userError: function () {
            return function (err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: {}
                });
            };
        },

        notFoundError: function (routes, view) {
            return router.get('*', function (req, res, next) {
                var url = req.originalUrl;

                for (var key in routes) {
                    if (key.indexOf('/*') != -1 && url.indexOf(key.replace('/*', '')) != -1) {
                        next();
                        return;
                    }
                }

                if (routes[url] == undefined) {
                    res.render(view, {
                        head: {
                            title: '404 - page not found!'
                        }
                    });
                    return;
                }

                next();
            });
        }
    };

errors.handler = function (type, types) {
    var types = types || {};

    switch(type) {
        case (types.devError || 'development'):
            return errors.devError();
            break;

        case (types.notFoundError || 'notFound'):
            return errors.notFoundError();
            break;

        default:
            return errors.userError();
            break;
    }
}

module.exports = errors;