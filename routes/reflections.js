const express = require('express');
const router = express.Router();
const {
	getAllReflections,
	addReflection,
	getAllReflectionsByBootcamperId,
	getReflectionByDate,
	deleteReflection,
	getAllReflectionsForAdmins,
} = require('../models/reflections');

router.get('/', async (req, res) => {
	const { date, id, admin } = req.query;
	if (date && id) {
		const reflection = await getReflectionByDate(date, id);
		if (reflection.length < 1) {
			res.status(404).json({ message: 'There is no reflection on this date !' });
			return;
		}
		res.json({
			success: true,
			message: ' Reflection queried by date',
			payload: reflection,
		});
		return;
	}
	if (admin) {
		const reflectionsArray = await getAllReflectionsForAdmins();
		res.json({
			success: true,
			message: ' Reflection queried by date',
			payload: reflectionsArray,
		});
		return;
	}

	const reflections = await getAllReflections();
	res.json({
		success: true,
		message: 'Here are all the ',
		payload: reflections,
	});
});

router.get('/:bootcamperId', async (req, res) => {
	const bootcamperId = req.params.bootcamperId;
	const reflections = await getAllReflectionsByBootcamperId(bootcamperId);
	res.json({
		success: true,
		message: 'Here are all the reflections',
		payload: reflections,
	});
});

router.post('/', async (req, res) => {
	const reflection = req.body;
	const response = await addReflection(reflection);
	console.table(response);
	res.json({
		success: true,
		message: 'Added reflection',
	});
});
router.delete('/:bootcamperId', async (req, res) => {
	const id = req.params.bootcamperId;
	const { date } = req.query;
	const response = await deleteReflection(id, date);
	res.json({
		success: true,
		message: 'Reflection deleted',
	});
});
module.exports = router;
