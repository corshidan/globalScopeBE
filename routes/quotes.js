const express = require('express');
const router = express.Router();
const quotes = [
	"If your path is more difficult, it's because your calling is higher.",
	'If you think you are too small to make a difference, try sleeping with a mosquito.',
	'Remember, today is the tomorrow you worried about yesterday.',
	"If at first you don't succeed, then skydiving definitely isn't for you.",
	"Life isn't finding shelter in the storm. It's about learning to dance in the rain.",
	'The road to success is always under construction.',
	"Even if you're on the right track, you'll get run over if you just sit there.",
	"Don't judge each day by the harvest you reap but by the seeds that you plant.",
	"Don't worry about the world coming to an end today. It is already tomorrow in Australia.",
	'You have power over your mind - not outside events. Realize this, and you will find strength.',
	'Can we see the code? ~ C. Daniel C',
	'What really matters is what you do with what you have.',
	"What room is this? ~ Nadeem Shabir'",
	"We don't have to take our clothes off to have a good time",
	"Haters gon' hate ~ Various",
	'The road to success is dotted with many tempting parking spaces.',
	'A computer once beat me at chess, but it was no match for me at kick boxing.',
	'Even a mistake may turn out to be the one thing necessary to a worthwhile achievement.',
	'Just keep swimming.',
	"Don't ever let someone tell you, you can't do something. Not even me. You got a dream, you got to protect it. People can’t do something themselves, they want to tell you you can’t do it. You want something, go get it. Period.",
	'Two little mice fell in a bucket of cream. The first mouse quickly gave up and drowned. The second mouse, wouldn’t quit. He struggled so hard that eventually he churned that cream into butter and crawled out.',
	'Discipline, doing what you hate to do but do it like you love it.',
	'To infinity and beyond!',
	'I’ve failed over and over again in my life. And that is why I succeed.',
	'If you’re going through hell, keep going.',
	'Persistence can change failure into extraordinary achievement.',
	'Make sure your worst enemy doesn’t live between your own two ears',
	'Opportunities multiply as they are seized.',
	'Believe you can and you’re halfway there.',
	'The only difference between success and failure is the ability to take action.',
	'An approximate answer to the right question is worth a great deal more than a precise answer to the wrong question.',
	'Good, better, best. Never let it rest. ’Til your good is better and your better is best.',
	'The fact of the matter is that there will be nothing learned from any challenge in which we don’t try our hardest.',
	'Leave the beaten track behind occasionally and dive into the woods. Every time you do you will be certain to find something you have never seen before.',
	'Failure is a prerequisite for great success. If you want success faster, double your rate of failure.',
	'Always tried to go a step past wherever people expected you to end up.',
	'The biggest adventure you can ever take is to live the life of your dreams.',
	'Experience is simply the name we give our mistakes.',
	'There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.',
	'Confidence comes not from always being right but not fearing to be wrong.',
	'Genius is one percent inspiration and ninety-nine percent perspiration.',
	'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
	'Formal education will make you a living, self-education will make you a fortune.',
	'Every failure brings with it the seed of an equivalent success.',
];
router.get('/', async (req, res) => {
	const index = Math.floor(Math.random() * quotes.length);
	res.json({
		success: true,
		message: 'One quote from our lovely team',
		payload: quotes[index],
	});
});

module.exports = router;
