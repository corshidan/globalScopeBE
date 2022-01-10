const router = require('express').Router();
const bcrypt = require('bcrypt');
const { query } = require('../db/index');
const { addBootcamper } = require('../models/bootcampers');
const jwtGenerator = require('../utils/jwtGenerator');
const authorize = require('../middleware/authorize');

router.get('/', async (req, res) => {
	res.json({ message: 'auth route' });
});

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
			return res.status(401).json('E-mail does not exist');
		}
		const isCorrectPassword = await bcrypt.compare(password, user.rows[0].password);
		if (!isCorrectPassword) {
			return res.status(401).json('Invalid Password');
		}
		const jwtToken = jwtGenerator(user.rows[0].id);
		res.json({ jwtToken: jwtToken });
	} catch (error) {
		console.log(error);
	}
});

router.post('/verify', authorize, (req, res) => {
	try {
		res.json(true);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});
module.exports = router;
