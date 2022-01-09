const { query } = require('../db/index');
const removeTimeFromDate = require('../utils/dateFormat');

async function getAllTopics() {
	const sqlString = `SELECT topics,created FROM reflections;`;
	try {
		const { rows: data, command } = await query(sqlString);
		console.log(command);
		const topicsArray = [];
		data.map((item) => {
			topicsArray.push(
				...item.topics.map((topics) => {
					const { topic, rating } = JSON.parse(topics);
					return { topic, rating, date: removeTimeFromDate(item.created.toISOString()) };
				})
			);
		});
		return topicsArray;
	} catch (err) {
		console.error(err);
	}
}

async function getAllTopicsByDate(date) {
	const sqlString = `SELECT topics,created FROM reflections WHERE created=$1;`;
	try {
		const { rows: data, command } = await query(sqlString, [date]);
		console.log(command);
		const topicsArray = [];
		data.map((item) => {
			topicsArray.push(
				...item.topics.map((topics) => {
					const { topic, rating } = JSON.parse(topics);
					return { topic, rating, date: removeTimeFromDate(item.created.toISOString()) };
				})
			);
		});
		return topicsArray;
	} catch (err) {
		console.error(err);
	}
}
module.exports = { getAllTopics, getAllTopicsByDate };
