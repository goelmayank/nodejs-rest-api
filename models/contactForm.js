var db = require('../config/db.js');
var contactFormSchema = require('./contactForm-schema');

var ContactForm = db.model('contactForm', contactFormSchema);

module.exports = ContactForm;
