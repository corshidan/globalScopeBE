const express = require('express');
const router = express.Router();
const { getAllBootcampers, addBootcamper } = require('../models/bootcampers');

router.get('/', async (req, res) => {
	const bootcampers = await getAllBootcampers();
	res.json({
		success: true,
		message: 'Here are all the bootcampers',
		payload: bootcampers,
	});
});
router.post('/', async (req, res) => {
	const { bootcamper } = req.body;
	const response = await addBootcamper(bootcamper);
	res.json({
		success: true,
		message: 'Bootcamper with name ' + bootcamper.name + 'was created successfully',
	});
});

module.exports = router;
