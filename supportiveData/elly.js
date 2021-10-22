const bootcamperTable = {
  firstname: 'Elly',
  lastname:'Durrant',
  bootcamperid: 1234,
  frequency: 4,
  startdate: '2021-07-26',
};

const reflections = [
  {
    
    bootcamperid: 1234,
    reflection: 'Today was very rushed. My internet went down in the middle of fat-arrow functions. The retro was good! Writing the 10 second intro was hard! I met my mentor today which was great! I have spent far too long after work trying to make a function that takes an array as a parameter. As such I am writing my reflection at 1.40am, which is daft.',
    accessible: false,
    topics: [
      { topic: 'Default parameters', rating: 4},
      { topic: 'Fat-arrow functions', rating: 2},
      { topic: 'Call back functions', rating: 4},
      { topic: 'Array Methods', rating: 3},
    ],
    confidence: 4,
    grateful: 'My mentor',
    improvements: 'Attend after school session tomorrow. Get help with writing function that takes array as parameter!!!!!',
    overallfeeling: 5,
  },
  {
    
    bootcamperid: 1234,
    reflection: 'It’s been very easy to get lost when navigating several different tables or linking the same table to itself. Using ALIAS is also confusing as the variables can be declared after they are used!',
    accessible: false,
    topics: [
      { topic: 'SQL tables', rating: 4},
      { topic: 'Select from tables', rating: 4},
      { topic: 'Joins in SQL', rating: 3},
      { topic: 'Order by asc/desc', rating: 3},
    ],
    confidence: 5,
    grateful: 'Time out for climbing',
    improvements: 'Install postgresql, Install NodeJS',
    overallfeeling: 4,
  },
  {
    
    bootcamperid: 1234,
    reflection: 'Today was really interesting, researching node-postgres via the docs, and then using this to create a server that can make requests to a database. I can see the benefit of looking through the docs thoroughly, but I think the skill will be searching the docs efficiently to find the key parts of the package that will actually be of use, as we ended up spending too much time reading the docs and didn’t complete many tasks in time.',
    accessible: true,
    topics: [
      { topic: 'Express', rating: 2 },
      { topic: 'Postgress', rating: 3 },
      { topic: 'Heroku', rating: 3 },
      { topic: 'Restful APIs', rating: 2 },
    ],
    confidence: 3,
    grateful: 'My pair for being supportive',
    improvements: 'finish off the express-postgress workshop',
    overallfeeling: 5,
  },
  {
    
    bootcamperid: 1234,
    reflection: 'There was a lot to learn today, and I understood it when we were going through it in the lessons, but in the workshops I couldn’t remember any of the steps and got lost for most of it. Really need to practise!',
    accessible: true,
    topics: [
      { topic: 'Intro to NPM', rating: 4},
      { topic: 'Using require to import modules', rating: 3 },
      { topic: 'Exporting modules', rating: 3 },
      { topic: 'Create a super basic server', rating: 2 },
    ],
    confidence: 3,
    grateful: 'Code club after school',
    improvements: 'Re-do express workshops',
    overallfeeling: 3,
  },
];
