const request = require('request')
//it contains v05 and v06

const url = 'https://reqres.in/api/users?page=2'

request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log('error: ', error)

    } else if (response.body.error) {
        console.log('unable to find location')
    }
    else {
        console.log(response.body.page)
    }


})

//mapbox

const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1Ijoic2Fuam95cGF0b3IiLCJhIjoiY2tuZWk0aXBjMmdncTJ3bWxsd2lmeXJkcyJ9.BT_eG9hhV5_XYmKTFalVNw'

request({ url: geoCodeUrl, json: true }, (error, response) => {

    if (error) {
        console.log('unable to connect to location services')
    } else if (response.body.features.length === 0) {
        console.log('somethings wrong in geo api')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]

        console.log('latitude: ' + latitude)
        console.log('longitude: ' + longitude)
    }

})
