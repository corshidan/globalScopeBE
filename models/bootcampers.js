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

async function getBootcamperByDateCreated(date) {
	console.log(typeof date);
	const sqlString = `SELECT date(startdate) FROM bootcampers WHERE startdate::date = '${date}' ;`;
	const response = await query(sqlString);
	console.log(response.rows[0]);
	return response.rows;
}

async function addBootcamper(bootcamper) {
	const sqlString = `INSERT INTO bootcampers (firstname,lastname,bootcamperid,frequency,startdate) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;
	try {
		const response = await query(sqlString, [
			bootcamper.firstname,
			bootcamper.lastname,
			bootcamper.bootcamperid,
			bootcamper.frequency,
			bootcamper.startdate,
		]);
		console.log(response.command);
		return response.rows;
	} catch (err) {
		console.error(err);
	}
}

module.exports = { getAllBootcampers, addBootcamper, getBootcamperByDateCreated };
