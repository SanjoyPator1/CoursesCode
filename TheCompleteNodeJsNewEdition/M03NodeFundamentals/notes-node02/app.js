console.log("starting app.js");

//loading the modules
const fs = require('fs');

//requiring our own modules
const notes = require('./notes.js');

console.log(process.argv);

//inputis in 3rd place
var command = process.argv[2];
console.log('command: ', command);

if(command == 'add'){
  console.log('adding new note');
}else if(command == 'list'){
  console.log('listing all notes');
}else if (command == 'read') {
  console.log('reading all notes');
}else if (command == 'remove') {
    console.log('removing note');
}
else{
  console.log('command not recognized');
}
