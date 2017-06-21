var mongoose = require('mongoose');


var bookSchema = mongoose.Schema({
	

	timestamp: {
		type: String,
		default: Date.now,
		required: false
	},
	ip: {
		type: String,
		required: false
	},
	transactionType: {
		mode:{
			type: String,
			required: false
		},
		depMode:{
			type: String,
			required: false
		},
		currencyType:{
			type: String,
			required: false
		}
	},
	uid: {
		type: String,
		required: false
	},
	bookingId: {
		type: String,
		required: false
	},
	aid: {
		type: String,
		required: false
	},
	userLoc: {
		type: String,
		required: false
	},
	userDest: {
		type: String,
		required: false
	},
	distance: {
		value:{
			type: Number,
			required: false
		},
		unit:{
			type: String,
			required: false
		}
		
	},
	fare: {
		type: Number,
		required: false
	},
	mac: {
		type: String,
		required: false
	},	
	agent: {
		type: Object,
		required: false
	},
	
	status: {
		stage: {
			type: Number,
			required: false
		},
		
		reason: {
			type: String,
			required: false
		}
	},
	referral: {
		type: String,
		required: false
	}		


});

var Book = module.exports = mongoose.model('Book', bookSchema);

/**
 * 1 - approved
 * 2 - cancelled
 * 3 - onhold // need clarification
 * 4 - pending
 */