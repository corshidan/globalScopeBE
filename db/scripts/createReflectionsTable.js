const { query } = require('../index');

async function createReflectionsTable() {
	const sqlString = `CREATE TABLE reflections  (
    CONSTRAINT  bootcamperid FOREIGN KEY (bootcamperid) REFERENCES bootcampers(id),
    id SERIAL PRIMARY KEY,
    bootcamperid INTEGER,
    created DATE,
    accessible BOOLEAN,
    topics TEXT[],
    confidence INTEGER,
    grateful VARCHAR(50),
    improvements TEXT,
    overallfeeling INTEGER
     );
    `;

	try {
		const res = await query(sqlString);
		console.log('Reflections table created');
	} catch (error) {
		console.log(error);
	}
}

createReflectionsTable();
