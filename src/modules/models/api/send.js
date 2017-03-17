import url from 'url';
import nodemailer from 'nodemailer';

export default function(req, callback){
    "use strict";

    var envelop,
        envelop2,
        smtpTrans,
        query = req.body || url.parse(req.url, true).query,
        token = req.session.token;

    if(!query.token || token != query.token) {
        callback({responseCode: 403, response: "invalid token!"}, null);
        return false;
    }

    if(!('name' in query) || query.name.length < 1) {
        callback({responseCode: 400, response: "invalid name!"}, null);
        return false;
    }

    if(!('email' in query) || query.email.length < 1) {
        callback({responseCode: 400, response: "invalid email!"}, null);
        return false;
    }

    if(!('message' in query) || query.message.length < 1) {
        callback({responseCode: 400, eresponse: "invalid message!"}, null);
        return false;
    }

    smtpTrans = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            type: 'OAuth2',
            user: "gilmarianimer@gmail.com",
            clientId: "533169024375-cgq60moa2dv7rov9gegu2shkbfelr0p4.apps.googleusercontent.com",
            clientSecret: "F9R7TLfdUC7OrHhCAJ0OESc4",
            refreshToken: "1/ah5Wk0x-38AP0pNvBkj396SiFdh1yu1_ggI-_jJyCA4"
        }
    });

    envelop = {
        from: 'gilmarianimer@gmail.com',
        to: 'gilmarianimer@gmail.com',
        subject: 'From: ' + query.name + '; ' + query.email + '; Gil Nimer - Contact Page',
        text: query.message
    };

    /*
    envelop2 = {
        from: 'gilmarianimer@gmail.com',
        to: query.email,
        subject: 'Thank you! Gil Nimer - Web Developer & Designer',
        text: query.message
    };
    */

    smtpTrans.sendMail(envelop, function(error, response) {
        if (error) {
            callback(error, null);
        } else {
            callback(null, response);
        }

        smtpTrans.close();
    });
}