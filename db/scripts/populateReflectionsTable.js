const reflections = require('../../supportiveData/reflectionsSampleData');
const { addReflection } = require('../../models/reflections');
async function populateReflections(array) {
	array.forEach(async (reflection) => {
		await addReflection(reflection);
	});
}
// console.log(bootcampers);
populateReflections(reflections);
