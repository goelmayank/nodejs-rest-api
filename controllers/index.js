var UserController = require('./UserController');
var BookController = require('./BookController');
var AutoController = require('./AutoController');



module.exports = {
	users: UserController,
	book: BookController,
	auto : AutoController
}