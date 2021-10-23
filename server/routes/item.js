const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

const Item = require('../models/Item');

// @route POST api/items
// @desc Create Item
// @access private
router.post('/', verifyToken, async (req, res) => {
	const { item } = req.body;

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
		const items = await Item.find();
		const count = await Item.count();

		return res.json({
			success: true,
			message: 'Success',
			count: count,
			items: items,
		});
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.json({ success: false, message: 'Internal server error' });
	}
});

module.exports = router;
