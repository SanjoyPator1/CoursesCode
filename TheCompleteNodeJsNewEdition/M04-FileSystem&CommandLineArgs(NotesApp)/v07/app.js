const notes = require('./notes')

const yargs = require('yargs');
const { removeNote } = require('./notes');
console.log("running");

yargs.version('1.1.0')

console.log(yargs.argv)

//create add method
yargs
    .command({
        command: 'add',
        describe: 'Adding command',
        builder: {
            title: {
                describe: 'note title',
                demandOption: true,
                type: 'String'
            },
            body: {
                describe: 'note description',
                demandOption: true,
                type: 'String'
            }
        },
        handler: (argv) => {
            notes.addNote(argv.title, argv.body)
        }
    })

//remove
yargs
    .command({
        command: 'remove',
        describe: 'removing command',
        handler: () => {
            console.log('removing notes');
        }
    })

//list
yargs
    .command({
        command: 'list',
        describe: 'listing command',
        handler: () => {
            console.log('listing notes');
        }
    })

//read
yargs
    .command({
        command: 'read',
        describe: 'reading command',
        handler: () => {
            console.log('reading notes');
        }
    })

//create remove function
yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'remove note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }

})


yargs.parse()