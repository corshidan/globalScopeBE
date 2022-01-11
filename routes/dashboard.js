const express = require('express');
const router = express.Router();
const { getBootcamperByDbId } = require('../models/bootcampers');
const authorize = require('../middleware/authorize');

router.get('/', (req, res) => {
	res.json({ message: 'Dashboard GET route' });
});

router.post('/', authorize, async (req, res) => {
	try {
		const response = await getBootcamperByDbId(req.user.id);
		res.json(response[0]);
	} catch (error) {
		console.error(error);
		res.status(500).json('Server error');
	}
});

module.exports = router;
