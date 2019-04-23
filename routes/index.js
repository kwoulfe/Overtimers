var express = require('express');
var router = express.Router();

var api_key = '';
var domain = '';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/contact', function(req, res) {
  var data = {
    from: req.body.email,
    to: 'kevinpwoulfe@gmail.com',
    subject: 'New Message from ' + req.body.name,
    text: req.body.message
  };

  console.log(data);

  mailgun.messages().send(data, function(error, body) {
    if (error) {
      console.log(error);
    }
    console.log(body);
  });
});

module.exports = router;
