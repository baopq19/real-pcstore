const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const ItemSchema = new Schema(
	{
		_id: {
			type: Number,
			required: true,
		},
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
	},
	{
		//Turn off auto generate ID
		_id: false,
	}
);

ItemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Item', ItemSchema);
