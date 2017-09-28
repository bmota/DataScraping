var express = require('express');
var request = require('request').defaults({ strictSSL: false });
var router = express.Router();


router.get('/', function(req, res, next){

  //this url hard code its for data sample
  var url = req.query.search || "https://en.wikipedia.org/wiki/Lists_of_films";
  console.log(req.query);
  console.log('test');
  request(url, function(error, response, html){

        if(!error){
          res.render('scrape', { htmlValue : html });
          
        }

    });
});

module.exports = router;
