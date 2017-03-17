export default function(model) {
    "use strict";
    return function(req, res) {
        model(req, function(error, result) {
            if(error){
                res.status(error.responseCode || 543);
                res.json(error);
                return false;
            }

            res.status(200).json(result);
        });
    }
}