var express = require('express');
var router = express.Router();

var api_key = '';
<<<<<<< HEAD
var domain = 'mail.joshlippi.com';
=======
var domain = '';
>>>>>>> 7e7826df6916cdb2bb6a12bbeca1b9a2b8c4ec72
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
  // req.session.errors = null;
});

router.post('/contact', function (req, res, next) {
  req
    .check('firstName', 'Please enter a name')
    .isAlpha()
    .isLength({ min: 2 });

  req.check('email', 'Enter a valid email address').isEmail();
  req.check('message', 'Enter your message').isLength({ min: 2 });

  var errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    // req.session.errors = errors;
  } else {
    var data = {
      from: req.body.email,
      to: '',
      subject:
        'New Message from ' + req.body.firstName + ' ' + req.body.lastName,
      text: req.body.message
    };

    console.log(data);

    mailgun.messages().send(data, function (error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
    res.send('OK');
  }
});

module.exports = router;
