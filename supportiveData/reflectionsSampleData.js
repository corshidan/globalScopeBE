const reflections = [
  {
    bootcamperid: 1,
    reflection:
      "Really enjoyed the day, the vibe is good, high morale, we definitely need to work a bit more on the design of the project. It feels like there is so much more to work on , maybe a bit overwhelming but slowly and with perseverance we keep going forward",
    accessible: true,
    topics: [
      { topic: "primitive types", rating: 4 },
      { topic: "complex types", rating: 2 },
      { topic: "pass by reference", rating: 3 },
      { topic: "cognitive load", rating: 5 },
    ],
    confidence: 4,
    grateful: "how awesome this course is",
    improvements: "complex types, computational thinking",
    overallfeeling: 5,
  },
  {
    bootcamperid: 2,
    reflection:
      "Today was really interesting, researching node-postgres via the docs, and then using this to create a server that can make requests to a database. I can see the benefit of looking through the docs thoroughly, but I think the skill will be searching the docs efficiently to find the key parts of the package that will actually be of use, as we ended up spending too much time reading the docs and didn’t complete many tasks in time.",
    accessible: true,
    topics: [
      { topic: "Express", rating: 2 },
      { topic: "Postgress", rating: 3 },
      { topic: "Heroku", rating: 3 },
      { topic: "Restful APIs", rating: 2 },
    ],
    confidence: 3,
    grateful: "My pair for being supportive",
    improvements: "finish off the express-postgress workshop",
    overallfeeling: 5,
  },
  {
    bootcamperid: 3,
    reflection:
      "Enjoyed the communication, friendly atmosphere and bouncing ideas off each other. We are now getting a better sense of the direction we want to head in. Looking forward to the rest of the week where we will have more time to agree on a vision and iron out any aspects that might block us in the coming weeks.",
    accessible: false,
    topics: [
      { topic: "React", rating: 1 },
      { topic: "CSS", rating: 3 },
      { topic: "HTML", rating: 4 },
      { topic: "currying", rating: 1 },
    ],
    confidence: 5,
    grateful: "health and wealth",
    improvements: "Exercise more",
    overallfeeling: 6,
  },
  {
    bootcamperid: 4,
    reflection:
      "Today was our first hackathon. It was challenging to get the task completed in time. Also, we worked in a group of three which was a bit different to before. Was good to try and build something even though we did not complete it",
    accessible: true,
    topics: [
      { topic: "DOM", rating: 3 },
      { topic: "closures", rating: 1 },
      { topic: "recursiveness", rating: 4 },
      { topic: "OOP", rating: 3 },
    ],
    confidence: 3,
    grateful: "support from coaches",
    improvements: "planning",
    overallfeeling: 3,
  },

];

module.exports = reflections;

  // {
  // 	bootcamperid: 1,
  // 	reflection: 'Another day went by learning loads of toads',
  // 	accessible: true,
  // 	topics: [
  // 		{ topic: 'closures', rating: 1 },
  // 		{ topic: 'recursiveness', rating: 4 },
  // 		{ topic: 'OOP', rating: 3 },
  // 		{ topic: 'currying', rating: 1 },
  // 	],
  // 	confidence: 2,
  // 	grateful: 'Liz Kaufman',
  // 	improvements: 'closures,currying',
  // 	overallfeeling: 3,
  // },
  // {
  // 	bootcamperid: 1,
  // 	reflection: 'Cannot find anything else to add',
  // 	accessible: true,
  // 	topics: [
  // 		{ topic: 'generator functions', rating: 1 },
  // 		{ topic: 'events', rating: 2 },
  // 		{ topic: 'authentication', rating: 1 },
  // 		{ topic: 'useReducer', rating: 4 },
  // 	],
  // 	confidence: 3,
  // 	grateful: 'the support given out',
  // 	improvements: 'generator functions,authentication',
  // 	overallfeeling: 3,
  // },
  // {
  // 	bootcamperid: 1,
  // 	reflection: 'Not in the mood for reflecting',
  // 	accessible: true,
  // 	topics: [
  // 		{ topic: 'firebase', rating: 1 },
  // 		{ topic: 's3 buckets', rating: 4 },
  // 		{ topic: 'serverless', rating: 2 },
  // 		{ topic: 'amplify', rating: 4 },
  // 	],
  // 	confidence: 5,
  // 	grateful: 'being alive , the sun , water',
  // 	improvements: 'firebase, firing events',
  // 	overallfeeling: 5,
  // },
  // {
  // 	bootcamperid: 2,
  // 	reflection:
  // 		'Today was very rushed. My internet went down in the middle of fat-arrow functions. The retro was good! Writing the 10 second intro was hard! I met my mentor today which was great! I have spent far too long after work trying to make a function that takes an array as a parameter. As such I am writing my reflection at 1.40am, which is daft.',
  // 	accessible: false,
  // 	topics: [
  // 		{ topic: 'Default parameters', rating: 4 },
  // 		{ topic: 'Fat-arrow functions', rating: 2 },
  // 		{ topic: 'Call back functions', rating: 4 },
  // 		{ topic: 'Array Methods', rating: 3 },
  // 	],
  // 	confidence: 4,
  // 	grateful: 'My mentor',
  // 	improvements:
  // 		'Attend after school session tomorrow. Get help with writing function that takes array as parameter!!!!!',
  // 	overallfeeling: 5,
  // },
  // {
  // 	bootcamperid: 2,
  // 	reflection:
  // 		'It’s been very easy to get lost when navigating several different tables or linking the same table to itself. Using ALIAS is also confusing as the variables can be declared after they are used!',
  // 	accessible: false,
  // 	topics: [
  // 		{ topic: 'SQL tables', rating: 4 },
  // 		{ topic: 'Select from tables', rating: 4 },
  // 		{ topic: 'Joins in SQL', rating: 3 },
  // 		{ topic: 'Order by asc/desc', rating: 3 },
  // 	],
  // 	confidence: 5,
  // 	grateful: 'Time out for climbing',
  // 	improvements: 'Install postgresql, Install NodeJS',
  // 	overallfeeling: 4,
  // },

  // {
  // 	bootcamperid: 2,
  // 	reflection:
  // 		'There was a lot to learn today, and I understood it when we were going through it in the lessons, but in the workshops I couldn’t remember any of the steps and got lost for most of it. Really need to practise!',
  // 	accessible: true,
  // 	topics: [
  // 		{ topic: 'Intro to NPM', rating: 4 },
  // 		{ topic: 'Using require to import modules', rating: 3 },
  // 		{ topic: 'Exporting modules', rating: 3 },
  // 		{ topic: 'Create a super basic server', rating: 2 },
  // 	],
  // 	confidence: 3,
  // 	grateful: 'Code club after school',
  // 	improvements: 'Re-do express workshops',
  // 	overallfeeling: 3,
  // },
  // {
  // 	bootcamperid: 3,
  // 	reflection: 'I cannot believe, today was a good day!',
  // 	accessible: false,
  // 	topics: [
  // 		{ topic: 'React', rating: 0 },
  // 		{ topic: 'CSS', rating: 3 },
  // 		{ topic: 'HTML', rating: 4 },
  // 	],
  // 	confidence: 5,
  // 	grateful: 'health and wealth',
  // 	improvements: 'Exercise more',
  // 	overallfeeling: 6,
  // },
  // {
  // 	bootcamperid: 3,
  // 	reflection: 'The key is to make it',
  // 	accessible: false,
  // 	topics: [
  // 		{ topic: 'React', rating: 1 },
  // 		{ topic: 'TypeScript', rating: 2 },
  // 		{ topic: 'Javascript', rating: 4 },
  // 	],
  // 	confidence: 5,
  // 	grateful: 'relaxation',
  // 	improvements: 'eat more donuts',
  // 	overallfeeling: 6,
  // },
  // {
  // 	bootcamperid: 3,
  // 	reflection: 'Shake it off, tomorrow is a new day',
  // 	accessible: true,
  // 	topics: [
  // 		{ topic: 'React', rating: 3 },
  // 		{ topic: 'Tailwind', rating: 0 },
  // 		{ topic: 'Framer', rating: 0 },
  // 	],
  // 	confidence: 5,
  // 	grateful: 'self improvement',
  // 	improvements: 'Better understand react',
  // 	overallfeeling: 5,
  // },
  // {
  // 	bootcamperid: 3,
  // 	reflection: 'Patience is key... keep pushing',
  // 	accessible: true,
  // 	topics: [
  // 		{ topic: 'React', rating: 4 },
  // 		{ topic: 'AWS', rating: 3 },
  // 		{ topic: 'Cypress', rating: 3 },
  // 	],
  // 	confidence: 5,
  // 	grateful: 'friends',
  // 	improvements: 'Be more patient',
  // 	overallfeeling: 4,
  // },
  // {
  // 	bootcamperid: 3,
  // 	reflection: 'Patience is key... keep pushing',
  // 	accessible: true,
  // 	topics: [
  // 		{ topic: 'React', rating: 4 },
  // 		{ topic: 'AWS', rating: 3 },
  // 		{ topic: 'Cypress', rating: 3 },
  // 	],
  // 	confidence: 5,
  // 	grateful: 'friends',
  // 	improvements: 'Be more patient',
  // 	overallfeeling: 4,
  // },
  // {
  // 	bootcamperid: 4,
  // 	reflection:
  // 		'Today we looked at objects, arrays and loops. Think of objects as a box of things while arrays are like an itemised list. Need to practice more. More comfortable with loops today.',
  // 	accessible: false,
  // 	topics: [
  // 		{ topic: 'objects', rating: 2 },
  // 		{ topic: 'arrays', rating: 3 },
  // 		{ topic: 'loops', rating: 4 },
  // 	],
  // 	confidence: 3,
  // 	grateful: 'pair programming',
  // 	improvements: 'objects and arrays',
  // 	overallfeeling: 4,
  // },

  // {
  // 	bootcamperid: 4,
  // 	reflection:
  // 		'We looked at asychronous code which was interesting. I think I have got an understadning of how things move through the call stack ',
  // 	accessible: true,
  // 	topics: [{ topic: 'async code', rating: 4 }],
  // 	confidence: 3,
  // 	grateful: 'energisers',
  // 	improvements: 'just need to practice',
  // 	overallfeeling: 4,
  // },

