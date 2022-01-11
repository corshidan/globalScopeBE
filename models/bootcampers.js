const { query } = require('../db/index');
const removeTimeFromDate = require('../utils/dateFormat');

async function getAllBootcampers() {
	const sqlString = `SELECT * FROM bootcampers;`;
	try {
		const { rows: data, command } = await query(sqlString);
		console.log(command);
		return data.map((item) => {
			return {
				...item,
				startdate: removeTimeFromDate(item.startdate.toISOString()),
				created: removeTimeFromDate(item.created.toISOString()),
			};
		});
	} catch (err) {
		console.error(err);
	}
}

async function getBootcamperByDateCreated(date) {
	const sqlString = `SELECT * FROM bootcampers WHERE startdate = $1;`;
	try {
		const { rows: data, command } = await query(sqlString, [date]);
		console.log(command + ' ' + data[0].firstname + ' ' + data[0].lastname);
		return data.map((item) => {
			return {
				...item,
				startdate: removeTimeFromDate(item.startdate.toISOString()),
				created: removeTimeFromDate(item.created.toISOString()),
			};
		});
	} catch (err) {
		console.error(err);
	}
}

async function getBootcamperByDbId(id) {
	const sqlString = `SELECT * FROM bootcampers WHERE id = $1;`;
	try {
		const { rows: data, command } = await query(sqlString, [id]);
		console.log(command + ' ' + data[0].firstname + ' ' + data[0].lastname);
		return data.map((item) => {
			return {
				...item,
				startdate: removeTimeFromDate(item.startdate.toISOString()),
				created: removeTimeFromDate(item.created.toISOString()),
			};
		});
	} catch (err) {
		console.error(err);
	}
}

async function addBootcamper(bootcamper) {
	const sqlString = `INSERT INTO bootcampers (firstname,lastname,email,password,bootcamperid,frequency,startdate) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id;`;
	try {
		const response = await query(sqlString, [
			bootcamper.firstname,
			bootcamper.lastname,
			bootcamper.email,
			bootcamper.password,
			bootcamper.bootcamperid,
			bootcamper.frequency,
			bootcamper.startdate,
		]);
		console.log(response.command);
		console.log(response.rows[0]);
		return response.rows[0];
	} catch (err) {
		console.error(err);
	}
}

module.exports = {
	getAllBootcampers,
	addBootcamper,
	getBootcamperByDateCreated,
	getBootcamperByDbId,
};
