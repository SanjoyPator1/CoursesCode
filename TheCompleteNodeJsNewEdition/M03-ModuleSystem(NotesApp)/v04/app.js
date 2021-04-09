const validator = require('validator');

console.log(validator.isEmail('example@gmail.com'))

console.log(validator.isEmail('example.com'))

console.log(validator.isURL('https://www.example.com'))