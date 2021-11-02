const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema(
	{
		_id: {
			type: Number,
			required: true,
		},
	},
	{
		//Turn off auto generate id
		_id: false,
	}
);
