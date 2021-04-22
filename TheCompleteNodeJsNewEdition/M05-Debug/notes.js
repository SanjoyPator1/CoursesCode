const fs = require('fs')
const chalk = require('chalk');

//create addNote function
const addNote = (title, body) => {
    const notes = loadNotes()

    //find function stops when even 1 match is found unlike filter which goes on searching
    const duplicateNote = notes.find((notes) => notes.title === title)

    //debug
    console.log('duplicateNote: ' + duplicateNote)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('notes added')
    }
    else {
        console.log('Note title taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    //try catch block for the 1st time we run
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

//create remove function
const removeNote = (title, body) => {
    const notes = loadNotes()

    //this array will contain all the title that matches previous notes
    const notesToKeep = notes.filter((note) => note.title !== title)

    //console.log('left notes are = ' + notesToKeep)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse.bold('note removed Success!'));
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse.bold('no note found'));
    }
}

//create list method
const listNotes = () => {
    console.log(chalk.blue('your notes'))
    const notes = loadNotes()

    notes.forEach(element => {
        console.log('title is: ' + element.title)
    });

}

//create Read function
//create list method
const readNotes = (title) => {

    const notes = loadNotes()

    const noteFound = notes.find((notes) => notes.title === title)
    //console.log(noteFound)

    if (noteFound) {
        console.log(chalk.blue('your notes'))
        console.log(chalk.green.inverse.bold('Notes title: ' + noteFound.title))
        console.log(chalk.blue('Notes body: ' + noteFound.body))
    }
    else {
        console.log(chalk.red.inverse.bold('No notes found matched with your title'))
    }


}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}