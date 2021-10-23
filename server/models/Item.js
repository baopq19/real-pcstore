const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	brandId: {
		type: Number,
		min: 0,
		max: 10000,
		default: 0,
	},
	price: {
		type: Number,
		min: 0,
		default: 0,
	},
	status: {
		type: String,
		enum: ['DELETED', 'OUT OF STOCK', 'AVAILABLE'],
		default: 'OUT OF STOCK',
	},
	image: String,
	category: {
		type: String,
		enum: [
			'CPU',
			'MAINBOARD',
			'GPU',
			'RAM',
			'DRIVE',
			'CASE',
			'UTILITIES',
			'COOLER',
			'MONITOR',
			'KEYBOARD',
			'MOUSE',
			'HEADPHONE',
			'LAPTOP',
			'SPEAKER',
			'CHAIR',
		],
	},
	detail: {
		type: Schema.Types.ObjectId,
	},
});

module.exports = mongoose.model('Item', ItemSchema);
