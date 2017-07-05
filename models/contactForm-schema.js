var db = require('../config/db.js');

var contactFormSchema = db.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  subject: {type: String, required: true},
  message: {type: String, required: true}
});



// contactFormSchema.methods.toJSON = function() {
//     var obj = this.toObject();
//     delete obj.passhash;
//     delete obj.__v;
//     return obj;
// };

module.exports = contactFormSchema;
