const { query } = require('../index');

async function alterTable() {
	const sqlString = `ALTER TABLE bootcampers ALTER COLUMN password TYPE VARCHAR(150) ;`;

	try {
		const res = await query(sqlString);
		console.log(res.command);
	} catch (error) {
		console.log(error);
	}
}
alterTable();
