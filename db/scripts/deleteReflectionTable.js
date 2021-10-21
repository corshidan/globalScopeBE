const { query } = require('../index');

async function deleteReflectionsTable() {
	const sqlString = `DROP TABLE IF EXISTS reflections ;`;

	try {
		const res = await query(sqlString);
		console.log(res.command);
		console.log('Reflections table droped');
	} catch (error) {
		console.log(error);
	}
}

deleteReflectionsTable();
