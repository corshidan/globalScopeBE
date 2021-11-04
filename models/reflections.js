const { query } = require('../db/index');
const removeTimeFromDate = require('../functions/dateFormat');

async function getAllReflections() {
	const sqlString = `SELECT * FROM reflections ;`;
	try {
		const { rows: data, command } = await query(sqlString);
		console.log(command);
		return fixData(data);
	} catch (err) {
		console.error(err);
	}
}

async function getAllReflectionsByBootcamperId(id) {
	const sqlString = `SELECT * FROM reflections WHERE bootcamperid=$1;`;
	try {
		const response = await query(sqlString, [id]);
		console.log(response.command);
		return fixData(response.rows);
	} catch (err) {
		console.error(err);
	}
}
async function getAllReflectionsForAdmins() {
	const sqlString = `SELECT r.created,r.bootcamperid,reflection,topics,confidence,grateful,improvements,overallfeeling,firstname,lastname,email FROM reflections AS r RIGHT JOIN bootcampers AS b ON r.bootcamperid = b.bootcamperid WHERE private=$1;`;
	try {
		const response = await query(sqlString, [false]);
		console.log(response.command);
		return fixData(response.rows);
	} catch (err) {
		console.error(err);
	}
}
async function getReflectionByDate(date, id) {
	const sqlString = `SELECT * FROM reflections WHERE created=$1 AND bootcamperid=$2;`;
	try {
		const response = await query(sqlString, [date, id]);
		console.log(response.command);
		return fixData(response.rows);
	} catch (err) {
		console.error(err);
	}
}
async function addReflection(reflection) {
	const sqlString = `INSERT INTO reflections (bootcamperid,reflection,private,topics,confidence,grateful,improvements,overallfeeling) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *; `;
	try {
		const response = await query(sqlString, [
			reflection.bootcamperid,
			reflection.reflection,
			reflection.private,
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
async function deleteReflection(bootcamperid, date) {
	const sqlString = `DELETE FROM reflections WHERE bootcamperid=$1 AND created=$2 RETURNING *; `;
	try {
		const response = await query(sqlString, [bootcamperid, date]);
		console.log(response.command);
		return response.rows;
	} catch (err) {
		console.error(err);
	}
}
function fixData(array) {
	return array.map((item) => {
		item.created = removeTimeFromDate(item.created.toISOString());
		item.topics = item.topics.map((item) => JSON.parse(item));
		return item;
	});
}
module.exports = {
	getAllReflections,
	getAllReflectionsByBootcamperId,
	getReflectionByDate,
	addReflection,
	getAllReflectionsForAdmins,
	deleteReflection,
};
