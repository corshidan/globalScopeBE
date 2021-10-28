const express = require('express');
const router = express.Router();
const { findBootcamper } = require('../models/login');

router.post('/', async (req, res) => {
	const loginInfo = req.body;
	const response = await findBootcamper(loginInfo);
	if (response.length < 1) {
		res.status(404).json({
			success: true,
			message: 'No entries found',
		});
		return;
	}
	res.json({
		success: true,
		payload: response,
	});
});

module.exports = router;
