console.log("running");

console.log(process.argv)

const command = process.argv[2]

if (command == 'add') {
    console.log("adding notes");
}
else if (command == 'remove') {
    console.log('removing notes');
}

