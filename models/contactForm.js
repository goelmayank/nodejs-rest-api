var db = require('../config/db.js');
var contactFormSchema = require('./user-schema');

var ContactForm = db.model('contactForm', contactFormSchema);

module.exports = ContactForm;
