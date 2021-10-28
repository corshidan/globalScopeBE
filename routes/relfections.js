const express = require('express');
const router = express.Router();
const {
	getAllReflections,
	addReflection,
	getAllReflectionsByBootcamperId,
} = require('../models/reflections');

router.get('/', async (req, res) => {
	const reflections = await getAllReflections();
	res.json({
		success: true,
		message: 'Here are all the reflections',
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

// airportRouter.get("/", async function (req, res) {
//   const { code } = req.query;
//   if (code) {
//     const data = await getAirportLocation(code);
//     // res.json what we get back
//     res.json({
//       success: true,
//       message: `Here is the aiport with the code: ${code.toUpperCase()} `,
//       payload: data,
//     });
//     return;
//   }

router.post('/', async (req, res) => {
	const reflection = req.body;
	const response = await addReflection(reflection);
	console.table(response);
	res.json({
		success: true,
		message: 'Added reflection',
	});
});
module.exports = router;
