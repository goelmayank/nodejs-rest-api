var UsersController = require('./UserController');
var BookController = require('./BookController');
var AutoController = require('./AutoController');
var UserController = require('./UserController');
var MessagesController = require('./MessagesController');


module.exports = {
	users: UsersController,
	book: BookController,
	auto : AutoController,
	user: UserController,
	messages: MessagesController
}