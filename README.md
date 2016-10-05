## About
A hexo tag plugin to embed yelp businesses in posts/pages  
![Sample image](/sample.png)

## Installation
```
npm install --save hexo-tag-yelp
```
Must add dependency to package.json:
```
...
"dependencies": {
  "hexo-yelp-tag": "^1.0.8",
...
}
```
Must add yelp API token to __config.yml.
```
...
yelp:
  key: <API token>
```
Get a [yelp token here.](https://www.yelp.com/developers/documentation/v3/get_started) 

Also, you must contain bootstrap somewhere in your project for the styling to be correct.

## Usage
```
{% yelp [business_id] %}
```
Example:
```
{% yelp mcdonalds-minneapolis-46 %}
```
