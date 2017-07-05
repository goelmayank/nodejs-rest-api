var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var constants = require('../config/constants');

router.post('/', (req, res) => {
  // user = { username: 'foo', email: 'blah@cheese.com', pwd: 'blah'}
    var email = req.body.form.email;
    user.save().then(
      (newEmail) => {
        var sessionToken = jwt.sign(newuser._id, constants.JWT_SECRET, { expiresIn: 60*60*24 });
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
