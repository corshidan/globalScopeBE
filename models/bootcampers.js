const { query } = require('../db/index');

async function getAllBootcampers() {
	const sqlString = `SELECT * FROM bootcampers;`;
	try {
		const response = await query(sqlString);
		console.log(response.command);
		return response.rows;
	} catch (err) {
		console.error(err);
	}
}

async function addBootcamper(bootcamper) {
	const sqlString = `INSERT INTO bootcampers (firstname,lastname,bootcamperid,frequency) VALUES ($1,$2,$3,$4) RETURNING *;`;
	try {
		console.log('from add bootcamper function first', bootcamper);
		const response = await query(sqlString, [
			bootcamper.firstname,
			bootcamper.lastname,
			bootcamper.bootcamperid,
			bootcamper.frequency,
		]);
		console.log(response.command);
		console.log('from addBootcamper function', response);
		return response.rows;
	} catch (err) {
		console.error(err);
	}
}

module.exports = { getAllBootcampers, addBootcamper };
