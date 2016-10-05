/*
 * Syntax:
 * {% yelp [business_id] %}
 *
*/

// var $ = require('jQuery');
// var http = require('http');
var request = require('request');

hexo.extend.tag.register('yelp', function (args) {
  var base_url = 'https://api.yelp.com/v3/businesses/';
  var business_id = args[0];
  // var business_id = 'fun';
  var config = hexo.config.yelp || ''
  var key config.key;
  // var key = 'a';
  if (key == '') {
    return;
  }


  var business_url = base_url + business_id;
  var business_data;

  var options = {
    url: business_url,
    headers: {
      "Authorization": "Bearer " + key
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      business_data = JSON.parse(body);
    } else {
      business_data = {};
    }
  }
  request(options, callback);

  return business_data;

});