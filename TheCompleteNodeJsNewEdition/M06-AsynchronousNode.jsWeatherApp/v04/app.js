const request = require('request')

const url = 'https://reqres.in/api/users?page=2'

request({ url: url }, (error, response) => {

    //console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.page)

})
