const { query } = require('../db/index');
const removeTimeFromDate = require('../functions/dateFormat');

async function findBootcamper(bootcamper) {
	const sqlString = `SELECT firstname,lastname,email,frequency,bootcamperid,startdate,created FROM bootcampers WHERE email=$1 AND password=$2 ;`;
	try {
		const { rows: data, command } = await query(sqlString, [
			bootcamper.email,
			bootcamper.password,
		]);
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

module.exports = { findBootcamper };
