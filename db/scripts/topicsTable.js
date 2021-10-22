const topics = ['javascript', 'closures', 'currying', 'recursiveness'];
const { query } = require('../index');

function createTopicsTable() {
	const sqlString = `CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    datecreated DATE DEFAULT CURRENT_DATE,
    topic TEXT
  )`;
	query(sqlString)
		.then((res) => console.log(res.command, 'Topics table created'))
		.catch((err) => console.log(err.message));
}
function populateTopics(topic) {
	const sqlString = `INSERT INTO topics (topic) VALUES ($1) RETURNING *`;
	query(sqlString, [topic])
		.then((res) => console.log(res.command, `${res.rows[0].topic} topic added`))
		.catch((err) => console.log(err.message));
}
function deleteTopicsTable() {
	const sqlString = `DROP TABLE topics;`;
	query(sqlString)
		.then((res) => console.log(res.command, 'Topics table deleted'))
		.catch((err) => console.log(err.message));
}
// createTopicsTable();
// topics.forEach((topic) => {
// 	populateTopics(topic);
// });
// deleteTopicsTable();
