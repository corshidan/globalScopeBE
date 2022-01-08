const { query } = require('../db/index');
const removeTimeFromDate = require('../functions/dateFormat');
const bcrypt = require('bcrypt');
async function findBootcamper(bootcamper) {
	const sqlString = `SELECT firstname,lastname,email,frequency,bootcamperid,password,startdate,created FROM bootcampers WHERE email=$1;`;
	try {
		const { rows: data, command } = await query(sqlString, [bootcamper.email]);
		if (await bcrypt.compare(bootcamper.password, data[0].password)) {
			console.log(command);
			return data.map((item) => {
				return {
					...item,
					startdate: removeTimeFromDate(item.startdate.toISOString()),
					created: removeTimeFromDate(item.created.toISOString()),
				};
			});
		} else {
			return [];
		}
	} catch (err) {
		console.error(err);
	}
}

module.exports = { findBootcamper };
