const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const customLabels = require('./../models/Response');

const Item = require('../models/Item');

// @route POST api/items
// @desc Create Item
// @access private
router.post('/', verifyToken, async (req, res) => {
	const { item } = req.body;
	const count = await Item.count();
	item._id = count ?? 0;

	if (!item.name)
		return res
			.status(400)
			.json({ success: false, message: 'Name is required' });

	try {
		const newItem = new Item({ ...item });
		await newItem.save();

		return res.json({
			success: true,
			message: 'Create item success',
			item: newItem,
		});
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ success: false, message: 'Internal server error' });
	}
});

// @route GET api/items
// @desc Create Item
// @access public
router.get('/', verifyToken, async (req, res) => {
	try {
		const { page, limit } = req.query;
		const result = await Item.paginate({}, { page, limit, customLabels });
		res.json({
			success: true,
			...result,
		});
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ success: false, message: 'Internal server error' });
	}
});

module.exports = router;
