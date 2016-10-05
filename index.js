/*
 * Syntax:
 * {% yelp [business_id] %}
 *
*/

// var $ = require('jQuery');
// var http = require('http');
// var Promise = require('bluebird');
// var request = require('request');
// var async = require('async');
var rp = require('request-promise');
// var config = hexo.config.yelp || {};

// var Yelp = require('yelp');
// var key = config.key

// var promiseRequest = function (bus_id) {
//   return new Promise(function (resolve, reject) {

//   })
// }


hexo.extend.tag.register('yelp', function (args) {
  var business_id = args[0];
  var base_url = 'https://api.yelp.com/v3/businesses/';
  // var business_id = 'fun';
  var config = hexo.config.yelp || '';
  if (config == '') {
    return;
  }

  // console.log(config);

  // var key = 'a';
  // var business_data = {};
  // var yelp = new Yelp({
  //   consumer_key: config.consumer_key,
  //   consumer_secret: config.consumer_secret,
  //   token: config.token,
  //   token_secret: config.token_secret
  // })

  // return yelp.business(business_id).then(function (data) { Promise.resolve(data);});

  var business_url = base_url + business_id;

  var options = {
    url: business_url,
    headers: {
      "Authorization": "Bearer " + config.key
    },
    json: true
  };



  var p =  rp(options)
    .then(function (r) {
       return Promise.resolve(r);
    });

  // return p;
  // var business_data;
  // function callback(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     // console.log(response);
  //     // console.log(body);
  //     console.log(body);
  //     return body;
  //     // console.log(business_data)
  //   } else {
  //     return {};
  //   }
  // }
  // return request(options, callback);
  // console.log(business_data);
  // console.log(business_data.name);
  // return business_data;

}, {async: true});


