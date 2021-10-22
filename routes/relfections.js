const express = require('express');
const router = express.Router();
const { getAllReflections, addReflection } = require('../models/reflections');

router.get('/', async (req, res) => {
	const reflections = await getAllReflections();
	res.json({
		success: true,
		message: 'Here are all the reflections',
		payload: reflections,
	});
});
router.post('/', async (req, res) => {
	const reflection = req.body;
	const response = await addReflection(reflection);
	console.table(response);
	res.json({
		success: true,
		message: 'Added reflection',
	});
});
module.exports = router;
