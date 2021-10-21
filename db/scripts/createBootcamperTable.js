const { query } = require('../index');

async function createBootcamperTable() {
	const sqlString = `CREATE TABLE bootcampers (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(15),
    lastname VARCHAR(15),
    bootcamperid INTEGER UNIQUE NOT NULL,
    frequency INTEGER NOT NULL,
    created DATE DEFAULT CURRENT_DATE
     );
    `;

	try {
		const res = await query(sqlString);
		console.log(res.command);
		console.log('Bootcamper table created');
	} catch (error) {
		console.log(error);
	}
}

createBootcamperTable();
