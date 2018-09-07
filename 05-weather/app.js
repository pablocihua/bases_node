
const axios = require('axios');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'City direction by get the weather',
        demand: true
    }
}).argv;

let encodedUrl = encodeURI( argv.direction )

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDSLE54inL7zPTG2uETosKMmNnVXA3yju4`)
.then( resp => {
    let location = resp.data.results[ 0 ].formatted_address;
    let lat = resp.data.results[ 0 ].geometry.location.lat;
    let lng = resp.data.results[ 0 ].geometry.location.lng;
    // console.log( JSON.stringify( resp.data, undefined, 2 ));
    console.log( location );
    console.log( lat );
    console.log( lng );
})
.catch( e => console.log('ERROR!!!', e ));