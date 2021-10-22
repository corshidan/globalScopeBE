const { query } = require('../index');

async function createReflectionsTable() {
	const sqlString = `CREATE TABLE reflections  (
    id SERIAL PRIMARY KEY,
    created DATE DEFAULT CURRENT_DATE,
    bootcamperid INTEGER,
    reflection TEXT,
    accessible BOOLEAN,
    topics TEXT[],
    confidence INTEGER,
    grateful VARCHAR(50),
    improvements TEXT,
    overallfeeling INTEGER,
    FOREIGN KEY (bootcamperid) REFERENCES bootcampers(bootcamperid)
    );
    `;

	try {
		const res = await query(sqlString);
		console.log(res.command);
		console.log('Reflections table created');
	} catch (error) {
		console.log(error);
	}
}

createReflectionsTable();
