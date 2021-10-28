const { query } = require('../db/index');
const removeTimeFromDate = require('../functions/dateFormat');

async function getAllReflections() {
	const sqlString = `SELECT * FROM reflections;`;
	try {
		const { rows: data, command } = await query(sqlString);
		console.log(command, data);
		return fixData(data);
	} catch (err) {
		console.error(err);
	}
}

async function getAllReflectionsByBootcamperId(id) {
	const sqlString = `SELECT * FROM reflections WHERE bootcamperId=$1;`;
	try {
		const response = await query(sqlString, [id]);
		console.log(response.command);
		return fixData(response.rows);
	} catch (err) {
		console.error(err);
	}
}
async function getReflectionByDate(date, id) {
	const sqlString = `SELECT * FROM reflections WHERE created=$1 AND id=$2;`;
	try {
		const response = await query(sqlString, [date, id]);
		console.log(response.command);
		return fixData(response.rows);
	} catch (err) {
		console.error(err);
	}
}
async function addReflection(reflection) {
	const sqlString = `INSERT INTO reflections (bootcamperid,reflection,accessible,topics,confidence,grateful,improvements,overallfeeling) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *; `;
	try {
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
function fixData(array) {
	return array.map((item) => {
		console.log('from fix data', item);
		item.created = removeTimeFromDate(item.created.toISOString());
		item.topics = item.topics.map((item) => JSON.parse(item));
		return item;
	});
}
module.exports = {
	getAllReflections,
	addReflection,
	getAllReflectionsByBootcamperId,
	getReflectionByDate,
};
