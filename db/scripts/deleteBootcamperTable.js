const { query } = require('../index');

async function deleteBootcamperTable() {
	const sqlString = `DROP TABLE IF EXISTS bootcampers ;`;

	try {
		const res = await query(sqlString);
		console.log(res.command);
		console.log('Bootcamper table droped');
	} catch (error) {
		console.log(error);
	}
}

deleteBootcamperTable();
