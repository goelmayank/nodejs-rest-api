var db = require('../config/db.js');
var subscribeFormSchema = require('./subscribeForm-schema');

var SubscribeForm = db.model('subscribeForm', subscribeFormSchema);

module.exports = SubscribeForm;
