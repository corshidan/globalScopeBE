const express = require('express');
const router = express.Router();
const { getAllTopics, getAllTopicsByDate } = require('../models/topics');
router.get('/', async (req, res) => {
	const { date } = req.query;
	const topics = await getAllTopics();
	if (date) {
		try {
			const topics = await getAllTopicsByDate(date);
			res.json({
				success: true,
				message: 'Topics by date',
				payload: topics,
			});
			return;
		} catch (err) {
			console.error(err);
		}
	}
	res.json({
		success: true,
		message: 'Here are all the topics',
		payload: topics,
	});
});

module.exports = router;
