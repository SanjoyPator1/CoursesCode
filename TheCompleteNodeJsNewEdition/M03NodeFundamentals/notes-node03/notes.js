console.log("starting notes.js");

var addNote = (title, body) => {
  console.log('Adding note', title, body);
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
