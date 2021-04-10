const yargs = require('yargs');


console.log("running");

// console.log(process.argv)
// const command = process.argv[2]

//customize yargs version
yargs.version('1.1.0')

console.log(yargs.argv)

//create add method
yargs
    .command({
        command: 'add',
        describe: 'Adding command',
        handler: () => {
            console.log('Adding notes');
        }
    })
    .argv;

//remove
yargs
    .command({
        command: 'remove',
        describe: 'removing command',
        handler: () => {
            console.log('removing notes');
        }
    })
    .argv;

//list
yargs
    .command({
        command: 'list',
        describe: 'listing command',
        handler: () => {
            console.log('listing notes');
        }
    })
    .argv;

//read
yargs
    .command({
        command: 'read',
        describe: 'reading command',
        handler: () => {
            console.log('reading notes');
        }
    })
    .argv;


// if (command == 'add') {
//     console.log("adding notes");
// }
// else if (command == 'remove') {
//     console.log('removing notes');
// }





