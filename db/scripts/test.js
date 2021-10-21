const { query } = require('../index');

async function oneBootcamper() {
	const sqlString = `INSERT INTO bootcampers (firstname,lastname,bootcamperid,frequency) VALUES ('colt','johnson',666,3);
  `;

	try {
		const res = await query(sqlString);
		console.log(res.command);
		console.log('One bootcamper added');
	} catch (error) {
		console.log(error);
	}
}

async function oneReflection() {
	const sqlString = `INSERT INTO reflections (bootcamperid,reflection,accessible,topics,confidence,grateful,improvements,overallfeeling) VALUES ('666','today I reflected',true,ARRAY ['fsdfsdf','dsadasd'],5,'HELOOO FROM THE OTHER SIDE','improvements',5); 
  `;

	try {
		const res = await query(sqlString);
		console.log(res.command);
		console.log('Added one reflection');
	} catch (error) {
		console.log(error);
	}
}

// oneBootcamper();
oneReflection();
("SELECT firstname,lastname,frequency,accessible,reflection,reflections.created FROM bootcampers RIGHT JOIN reflections ON bootcampers.bootcamperid=reflections.bootcamperid WHERE bootcampers.bootcamperid=45 AND reflections.created='2021-10-21';");
