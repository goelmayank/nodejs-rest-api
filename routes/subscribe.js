var router = require('express').Router();
var SubscribeForm = require('../models/subscribeForm');

router.post('/', (req, res) => {
  // user = { username: 'foo', email: 'blah@cheese.com', pwd: 'blah'}
    var subscribeForm = new SubscribeForm({
        email: req.body.form.email
    });

    subscribeForm.save().then(
      (newSubscribeForm) => {
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
