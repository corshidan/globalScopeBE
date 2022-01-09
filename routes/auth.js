const router = require('express').Router();
const bcrypt = require('bcrypt');
const { query } = require('../db/index');
const { addBootcamper } = require('../models/bootcampers');
const jwtGenerator = require('../functions/jwtGenerator');

router.get('/', async (req, res) => {});

router.post('/register', async (req, res) => {
	const newBootcamper = req.body;

	try {
		const usersInDatabase = await query('SELECT * FROM bootcampers WHERE email=$1', [
			newBootcamper.email,
		]);

		if (usersInDatabase.length > 0) {
			return res.status(401).json('E-mail already exists');
		}

		const hashedPassword = await bcrypt.hash(newBootcamper.password, 10);
		const { id: bootcamperDbId } = await addBootcamper({
			...newBootcamper,
			password: hashedPassword,
		});

		const jwtToken = jwtGenerator(bootcamperDbId);

		res.json({ jwtToken: jwtToken });
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error');
	}
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await query('SELECT * FROM bootcampers WHERE email=$1', [email]);
		if (user.rows.length === 0) {
			return res.status(401).send('E-mail is invalid');
		}
	} catch (error) {}
});

module.exports = router;
