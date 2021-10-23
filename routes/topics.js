const express = require('express');
const router = express.Router();
const { getAllTopics } = require('../models/topics');
router.get('/', async (req, res) => {
	const topics = await getAllTopics();
	res.json({
		success: true,
		message: 'Here are all the topics',
		payload: topics,
	});
});

module.exports = router;
