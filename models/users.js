var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
	
	name: {
		first: {
			type: String,
			required: false
		},
		last: {
			type: String,
			required: false
		}
	},
	
	picture: {
		type: String,
		required: false
	},
	
	email: {
		type: String,
		required: false
	},
	emailSec: {
		type: String,
		required: false
	},
	password: {
		type: String,
		required: false
	},
	phone: {
		countryCode: {
			type: String,
			required: false
		},
		mobile: {
			type: String,
			required: false
		}
	},	
	
	timestamp: {
		type: String,
		default: Date.now,
		required: false
	},
	lastActive: {
		type: String,
		default: Date.now,
		required: false
	},
	ip: {
		type: String,
		required: false
	},
	loginVia: {
		type: String,
		required: false
	},
	homeLoc: {
		type: String,
		required: false
	},
	workLoc: {
		type: String,
		required: false
	},
	status: {
		type: Number,
		required: false
	},
	mac: {
		type: String,
		required: false
	},
	fid: {
		type: String,
		required: false
	},
	
	balanceFiat: {
		type: Number,
		default: 0,
		required: false
	},
	balanceFiatPending: {
		type: Number,
		default: 0,
		required: false
	},
	kyc:
	{
		status: {
			type: Number,
			default: 0,
			required: false
		},
		reason: {
			type: String,
			required: false
		},
		pan: {
			type: String,
			required: false
		},
		url: {
			type: String,
			required: false
		}
	},
	agent: {
		type: Object,
		required: false
	},
	
	proLink: {
		type: String,
		required: false
	},
	gender: {
		type: String,
		required: false
	},
	token: {
		type: String,
		required: false
	},
	ageRange: {
		type: Object,
		required: false
	},
	cover: {
		type: Object,
		required: false
	},
	currency: {
		type: Object,
		required: false
	},
	devices: {
		type: Array,
		default: [],
		required: false
	},
	bank: {
		fullName: {
			type: String,
			required: false
		},
		accountNo: {
			type: String,
			required: false
		},
		ifsc: {
			type: String,
			required: false
		},
		bankName: {
			type: String,
			required: false
		},
		branchName: {
			type: String,
			required: false
		},
		city: {
			type: String,
			required: false
		}
	},
	pref:
	{
		countryCodeUser: {
			type: String,
			required: false
		},
		countryUser: {
			type: String,
			default: "SRI LANKA",
			required: false
		},
		cityUser: {
			type: String,
			required: false
		},
		currencyUser: {
			type: String,
			default: "LKR",
			required: false
		}
	},
	locale: {
		type: String,
		required: false
	},
	timezone: {
		type: String,
		required: false
	},
	socialVerified: {
		type: Boolean,
		required: false
	},
	updatedTime: {
		type: String,
		required: false
	}
});

var Users = module.exports = mongoose.model('Users',userSchema);

