/*
 * Syntax:
 * {% yelp [business_id] %}
 *
*/

var request = require('sync-request'),
    _ = require('underscore'),
    fs = require('fs'),
    path = require('path');

var file_path = path.join(__dirname, 'yelp-template.html');

function yelp(business_id) {
  var template = fs.readFileSync(file_path).toString();
  var base_url = 'https://api.yelp.com/v3/businesses/';
  var config = hexo.config.yelp || '';
  if (config == '') {
    return;
  }

  var business_url = base_url + business_id;

  var options = {
    headers: {
      "Authorization": "Bearer " + config.key
    }
  };

  var res = request('GET', business_url, options);
  var business_data =  JSON.parse(res.getBody());

  var loc = "";
  loc += business_data.location.address1;
  loc += business_data.location.address2;
  loc += business_data.location.address3;
  loc += " ";
  loc += business_data.location.city;
  loc += ", ";
  loc += business_data.location.state;
  loc += ", "
  loc += business_data.location.zip_code;
  console.log(business_data);

  return _.template(template)({
    name: business_data.name,
    price: business_data.price,
    rating: business_data.rating,
    review_count: business_data.review_count,
    phone: business_data.phone,
    location: loc,
    url: business_data.url
  });
}


hexo.extend.tag.register('yelp', function (args) {
  return yelp(args[0]);
});


hexo.extend.helper.register('yelp', function(business_id) {
  return yelp(business_id);
})