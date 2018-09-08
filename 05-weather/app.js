const place = require('./place/place'),
    weather = require('./weather/weather'),
    colors = require('colors');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'City direction by get the weather',
        demand: true
    }
}).argv;

// place.getPlaceLatLng(argv.direction)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err)
//     });

// weather.getWeather(20.6596988, -103.3496092)
//     .then((res) => {
//         console.log(res)
//     }, err => console.log(err));

let getInfo = async(direction) => {
    try {
        let coords = await place.getPlaceLatLng(direction),
            temp = await weather.getWeather(coords.lat, coords.lng);

        return `The weather in ${ argv.direction.yellow } is ${ colors.cyan( temp )}`;
    } catch (e) {
        return `It could not know the weather at <${ direction.red }> !!!`;
    }
}

getInfo(argv.direction)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => console.log(err));