console.log("starting notes.js");

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];

  var note = {
    title,
    body,
  };

//try catch for if no data in notes-data.json file
  try{
    //loading the previous notes and adding it in the notes array as a JSON
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  }catch (e) {

  }

  // var dublicateNotes = notes.filter((note) => {
  //   return note.title == true;
  // });

  var dublicateNotes = notes.filter((note) => note.title ==title);
  //console.log("length of dublicatenotes is - ", dublicateNotes.length)

  if(dublicateNotes.length == 0){
    console.log("dublicateNotes not found- change is made")
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
  else{
    console.log("dublicateNotes found- no change is made")
  }
};

var getAll = () => {
  console.log('Getting all note');
}

var getNote = (title) => {
  console.log('reading note : ', title);
}

var removeNote = (title) => {
  console.log('removing note : ', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
