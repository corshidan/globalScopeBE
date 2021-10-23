const { query } = require('../db/index');
const removeTimeFromDate = require('../functions/dateFormat');

async function getAllTopics() {
	const sqlString = `SELECT * FROM topics;`;
	try {
		const { rows: data, command } = await query(sqlString);
		console.log(command);
		return data.map((topic) => {
			topic.datecreated = removeTimeFromDate(topic.datecreated.toISOString());
			return topic;
		});
	} catch (err) {
		console.error(err);
	}
}

module.exports = { getAllTopics };
