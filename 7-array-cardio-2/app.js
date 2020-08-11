const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good!', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and every checks
// Array.prototype.some() // is at least one person 19?
const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});
// Array.prototype.every() // is everyone 19?
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

// Array.prototype.find()
// Find finds the first
// Find comment with ID of 823423
  // const comment = comments.find(comment => {
  //   if(comment.id === 823423) {
  //     return true;
  //   }
  // });
// refactor because comment.id === 823423 will return a boolean true or false
const comment = comments.find(comment => comment.id === 823423);

// Array.prototype.findIndex()
// Find comment and delete comment with ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);

// comments.splice(index, 1);

// build new array of comments
const newComments = [
  ...comments.slice(0, index), // start at 0 and go until index
  ...comments.slice(index + 1) // start at index + 1 and go until the end so you don't pass anything
]; // ...spreads the items into the new array
