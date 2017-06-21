var User = require('../models/users');
var request = require('superagent');


module.exports = {

	find: (params, callback) => {
		User.find(params, function(err, users){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, users);
		});
	},
	findOne: (params, callback) => {
		User.findOne(params, function(err, users){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, users);
		});
	},
	findById: (id, callback) => {
		User.findById(id, function(err, user){
			if(err){
				callback(err,  null);
				return; 
			}
			callback(null, user);
		});
	},
	create: (params, callback) => {
		User.create(params, function(err, user){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, user);
		});

	},
	update: (id, params, callback) => {
		User.findByIdAndUpdate(id, params, {new:true}, function(err, user){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, user);
		});

	},
	delete: (id, callback) => {
		User.findByIdAndRemove(id, function(err){
			if(err){
				callback(err,null)
				return;
			}
			callback(null, null);
		});

	},
	get: (url, params, callback) => {
		var datax = (params != null)? params : '';
		 request
		 .get(url)
		 .query(datax)
		 .buffer(true)
		 .type('JSON')
		 .end(callback);		

	},
	post: (url, params, callback) => {
		
		request
		.post(url)
		.send(params)
		.set('Accept', 'application/json')
		.end(callback);
	},
	put: (url, params, callback) => {
		
		request
		.put(url)
		.send(params)
		.set('Accept', 'application/json')
		.end(callback);
	}
}