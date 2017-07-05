var router = require('express').Router();
var bcrypt = require('bcryptjs');
var ContactForm = require('../models/contactForm');
var jwt = require('jsonwebtoken');
var constants = require('../config/constants');

router.post('/', (req, res) => {
  // user = { username: 'foo', email: 'blah@cheese.com', pwd: 'blah'}
    var contactForm = new ContactForm({
        name: req.body.form.name,
        email: req.body.form.email,
        subject: req.body.form.subject,
        message: req.body.form.message
    });

    contactForm.save().then(
      (newContactForm) => {
        res.json({
          message: 'success'          
        });
      },
      (err) => {
        res.send(500, err.message);
      }
    );
});

module.exports = router;
