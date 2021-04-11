const fs = require('fs')

// const book = {
//     title: 'Ego is enemy',
//     author: 'R.H'
// }

// //it converts JSON into string
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// //it converts string into JSON 
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

//reading from a json file
// const dataBuffer = fs.readFileSync('1-json.json')

// //converting the buffer to string
// const dataJSON = dataBuffer.toString()

// //converting the string into json
// const data = JSON.parse(dataJSON)

// //displaying the json property
// console.log(data.title)

//CHALLENGE
const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
const dataJSON = JSON.parse(data)

dataJSON.name = "sanjoy"
dataJSON.age = 23
//fs works with string so convert json to string to write
const dataString = JSON.stringify(dataJSON)

fs.writeFileSync('1-json.json', dataString)
