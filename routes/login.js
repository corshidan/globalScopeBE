const express = require('express');
const router = express.Router();
const { findBootcamper } = require('../models/login');

router.post('/', async (req, res) => {
	const loginInfo = req.body;
	const response = await findBootcamper(loginInfo);
	res.json({
		success: true,
		payload: response,
	});
});

module.exports = router;
