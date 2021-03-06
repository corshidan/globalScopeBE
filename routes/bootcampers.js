const express = require('express');
const router = express.Router();
const {
	getAllBootcampers,
	addBootcamper,
	getBootcamperByDateCreated,
} = require('../models/bootcampers');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
	const { admin } = req.query;
	if (admin) {
		const bootcampers = await getAllBootcampers();
		const filteredDataForAdmin = bootcampers.map((bootcamper) => {
			return {
				firstname: bootcamper.firstname,
				lastname: bootcamper.lastname,
				email: bootcamper.email,
				bootcamperId: bootcamper.bootcamperid,
			};
		});
		res.json({
			success: true,
			message: 'Here are all the bootcampers',
			payload: filteredDataForAdmin,
		});
		return;
	}
	const bootcampers = await getAllBootcampers();
	res.json({
		success: true,
		message: 'Here are all the bootcampers',
		payload: bootcampers,
	});
});
router.get('/:startdate', async (req, res) => {
	const date = req.params.startdate;
	const bootcampers = await getBootcamperByDateCreated(date);
	res.json({
		success: true,
		message: 'Here are all the bootcampers',
		payload: bootcampers,
	});
});

router.post('/', async (req, res) => {
	const bootcamper = req.body;
	const hashedPassword = await bcrypt.hash(bootcamper.password, 10);
	try {
		const response = await addBootcamper({ ...bootcamper, password: hashedPassword });
		console.log(response);
		res.json({
			success: true,
			message: 'Bootcamper was created successfully',
		});
	} catch {}
});

module.exports = router;
