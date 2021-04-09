const fs = require('fs')

const file = fs.readFileSync('./test.txt', {encoding: 'utf-8'}).toString()

console.log(file)

fs.writeFileSync('./test.txt', 'var me = "new write now by me"')

