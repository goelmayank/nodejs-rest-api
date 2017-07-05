var db = require('../config/db.js');

var subscribeFormSchema = db.Schema({
  email: {type: String, required: true}
});



// subscribeFormSchema.methods.toJSON = function() {
//     var obj = this.toObject();
//     delete obj.passhash;
//     delete obj.__v;
//     return obj;
// };

module.exports = subscribeFormSchema;
