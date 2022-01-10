const { query } = require('../index');
const bcrypt = require('bcrypt');

async function alterTable() {
	const sqlString = `ALTER TABLE bootcampers ALTER COLUMN password TYPE VARCHAR(150) ;`;

	try {
		const res = await query(sqlString);
		console.log(res.command);
	} catch (error) {
		console.log(error);
	}
}
// alterTable();

async function updatePasswords() {
	const sqlString = `UPDATE  bootcampers SET password=$1 WHERE  id=6 ;`;
	const password = 'socadmin';
	const hashedPassword = await bcrypt.hash(password, 10);
	try {
		const res = await query(sqlString, [hashedPassword]);
		console.log(res.command);
	} catch (error) {
		console.log(error);
	}
}
// updatePasswords();

async function deleteEntries() {
	const sqlString = `DELETE FROM  bootcampers WHERE  id=5 ;`;
	try {
		const res = await query(sqlString);
		console.log(res.command);
	} catch (error) {
		console.log(error);
	}
}
// deleteEntries();

const basicPass = ['waseem', 'eleanor', 'filipe', 'socadmin', 'daniel'];
