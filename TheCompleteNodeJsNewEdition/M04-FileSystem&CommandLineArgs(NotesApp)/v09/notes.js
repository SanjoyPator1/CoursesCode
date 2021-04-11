const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
    return 'your notes'
}


//create addNote function
const addNote = (title, body) => {
    const notes = loadNotes()

    //this array will contain all the title that matches previous notes
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}