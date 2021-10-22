const { query } = require('../db/index');
async function getAllReflections() {
	const sqlString = `SELECT * FROM reflections;`;
	try {
		const response = await query(sqlString);
		console.log(response.command);
		const data = response.rows.map((item) => {
			const freshItem = { ...item };
			freshItem.topics = fixTopics(item.topics);
			return freshItem;
		});
		return data;
	} catch (err) {
		console.error(err);
	}
}

async function addReflection(reflection) {
	const sqlString = `INSERT INTO reflections (bootcamperid,reflection,accessible,topics,confidence,grateful,improvements,overallfeeling) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *; `;
	try {
		console.log(typeof reflection.topics, reflection.topics);
		const response = await query(sqlString, [
			reflection.bootcamperid,
			reflection.reflection,
			reflection.accessible,
			reflection.topics,
			reflection.confidence,
			reflection.grateful,
			reflection.improvements,
			reflection.overallfeeling,
		]);
		console.log(response.command);

		return response.rows;
	} catch (err) {
		console.error(err);
	}
}

function fixTopics(array) {
	return array.map((item) => JSON.parse(item));
}
module.exports = { getAllReflections, addReflection };
