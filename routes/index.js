var express = require('express');
var request = require('request').defaults({ strictSSL: false });
var router = express.Router();

// var specialRequest = request.defaults({
//   strictSSL: false
// });

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', htmlValue : html });
  
});

router.get('/scrape', function(req, res, next){

  //this url hard code its for data sample
  var url = req.body.url || "https://en.wikipedia.org/wiki/Lists_of_films";

  request(url, function(error, response, html){

        if(!error){
          res.send(html);
        }

    });
});

module.exports = router;
