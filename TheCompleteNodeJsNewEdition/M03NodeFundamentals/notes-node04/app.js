console.log("starting app.js");
console.log("V09 - 9. Adding and Saving Notes.mp4");

//loading the modules
const fs = require('fs');

//requiring our own modules
const notes = require('./notes.js');

const yargs = require('yargs');

const argv = yargs.argv;

//inputis in 3rd place
var command = argv._[0];
console.log('command: ', command);
//console.log('Process: ',process.argv);
console.log('Yargs', argv);

if(command == 'add'){
  notes.addNote(argv.title, argv.body);
}else if(command == 'list'){
  notes.getAll();
}else if (command == 'read') {
  notes.getNote(argv.title);
}else if (command == 'remove') {
    notes.removeNote(argv.title);
}
else{
  console.log('command not recognized');
}
