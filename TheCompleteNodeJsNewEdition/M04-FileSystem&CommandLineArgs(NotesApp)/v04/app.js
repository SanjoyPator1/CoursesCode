const yargs = require('yargs');
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
            console.log('adding note');
            console.log('Tile: ' + argv.title);
            console.log('Body: ' + argv.body);
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


yargs.parse()