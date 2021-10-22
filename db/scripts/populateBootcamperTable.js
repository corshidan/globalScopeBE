const bootcampers = require('../../supportiveData/bootcampersSampleData');
const { addBootcamper } = require('../../models/bootcampers');
async function populateBootcampers(array) {
	array.forEach(async (bootcamper) => {
		await addBootcamper(bootcamper);
	});
}
// console.log(bootcampers);
populateBootcampers(bootcampers);
