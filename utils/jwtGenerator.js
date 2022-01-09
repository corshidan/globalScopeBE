const jwt = require('jsonwebtoken');

function generateJwtToken(user_id) {
	const payload = {
		user: {
			id: user_id,
		},
	};

	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
}

module.exports = generateJwtToken;
