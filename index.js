/*
 * Syntax:
 * {% yelp [business_id] %}
 *
*/

var $ = require('jQuery');

hexo.extend.tag.register('yelp', function (args) {
  var base_url = 'https://api.yelp.com/v3/businesses/';
  var business_id = args[0];
  var key = hexo.config.yelp || ''
  
  if (key == '') {
    return;
  }
  var url = base_url + business_id;
  var business_data;
  $.get(
    url,
    {"Authorization": "Bearer " + key},
    function(data) {
      business_data = data;
    },
    "json"
    );
  return business_data;

});