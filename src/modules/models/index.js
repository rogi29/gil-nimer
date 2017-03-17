import fs from 'fs';
import randtoken from 'rand-token';
import request from 'request';
import dateformat from 'dateformat';
import {behance, paths} from '../../../config';

export default function(req, callback) {
    "use strict";

    var time,
        cards,
        projects,
        data = JSON.parse(fs.readFileSync('./src/data/landing.eng.json')),
        intro = data['header']['intro'],
        token = randtoken.generate(16),
        buttons = data['buttons'],
        about = data['main']['about']['tags'].split(','),
        aboutEn = encodeURIComponent(about).split('%2C'),
        contact = data['footer']['contact']['tags'].split(','),
        contactEn = encodeURIComponent(contact).split('%2C');

    req.session.token = token;

    data['main']['about']['tags'] = about.map(function(v, i){
        return {encoded: aboutEn[i], whitespace: v};
    });

    data['footer']['contact']['tags'] = contact.map(function(v, i){
        return {encoded: contactEn[i], whitespace: v};
    });

    data = {
        projectID: 0,
        token: token,
        head: {
            static: paths.builds.dest.uri,
            titles: data['titles'],
            titlesParsed: JSON.stringify(data['titles']),
            title: data['titles']['home']
        },

        intro: {
            name: intro[0],
            profession: intro[1],
            saying: intro[2],
            phrase: intro[3]
        },

        thankyou:   data['footer']['thankyou'],
        contact:    data['footer']['contact'],
        copyright:  data['footer']['copyright'],
        buttons:    data['buttons'],
        about:      data['main']['about'],
        lab:        data['main']['lab'],
        portfolio:  data['main']['portfolio']
    };

    request(`http://www.behance.net/v2/users/GilNimer/projects?client_id=${behance.key}&card=0&sort=published_date`, function(error, response, body) {
        if(error)
            console.log(error);

        projects = (response.statusCode != 200) ? [{}, {}, {}, {}, {}] : JSON.parse(body).projects;
        cards = projects.slice(0,4);
        cards.forEach(function(v, k){
            time = v.published_on || 1;
            cards[k].fields = cards[k].fields.map(function(v){
                return {encoded: encodeURIComponent(v), whitespace: v};
            });
            cards[k].published_on = dateformat(new Date(time*1000), 'mmmm dS, yyyy');
        });

        data['portfolio']['cards'] = cards;

        callback(data);
    });
}