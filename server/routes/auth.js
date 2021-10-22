require('dotenv').config;
const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post('/register', async (req, res) => {
	const { username, password, email } = req.body;

	//Simple validate
	if (!username || !password || !email) {
		return res.status(400).json({
			success: false,
			message: 'Username/Password không được để trống',
		});
	}

	try {
		const usernameCheck = await User.findOne({ username });
		const emailCheck = await User.findOne({ email });

		//Username existed
		if (usernameCheck)
			return res.status(400).json({
				success: false,
				message: 'Username đã tồn tại',
			});
		//Email existed
		else if (emailCheck)
			return res.status(400).json({
				success: false,
				message: 'Email đã tồn tại',
			});

		// All validated
		const hashedPassword = await argon2.hash(password);
		const newUser = new User({ username, password: hashedPassword, email });
		await newUser.save();

		// Return token
		const accessToken = jwt.sign(
			{ userId: newUser._id },
			process.env.ACCESS_TOKEN_SECRET
		);

		return res.json({ success: true, message: 'User created', accessToken });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
});

module.exports = router;
