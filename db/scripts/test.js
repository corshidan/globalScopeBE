const { query } = require('../index');

async function alterTable() {
	const sqlString = `ALTER TABLE reflections RENAME COLUMN accessible TO private ;`;

	try {
		const res = await query(sqlString);
		console.log(res.command);
	} catch (error) {
		console.log(error);
	}
}
alterTable();
