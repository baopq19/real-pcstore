const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	const authHeader = req.header('Authorization');

	// //Get token from string Bearer ey...
	const token = authHeader.split(' ')[1];

	if (!token)
		return res.status(401).json({ success: false, message: 'Unauthorized' });

	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		req.userId = decoded.userId;

		next();
	} catch (error) {
		console.log(error);
		return res.status(403).json({ success: false, message: 'Invalid token' });
	}
};

module.exports = verifyToken;
