// var obj = {
//   name: 'sanjoy'
//
// };
//
////convert JSON into string
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "sanjoy", "age":25}';
// //convert it into JSON
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

//this is a JSON
var originalNote = {
  title: 'some title',
  body: 'some body'
};
//convert it to string
var originalNoteString = JSON.stringify(originalNote);
//saving the JSON as String
fs.writeFileSync('notes.json', originalNoteString);

//reading the file saved
var noteString =fs.readFileSync('notes.json');
//covert it back into JSON from string
var note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.title);
