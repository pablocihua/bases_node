const axios = require('axios'),
    colors = require('colors');

module.exports = {
    getPlaceLatLng: async(direction) => {
        let encodedUrl = encodeURI(direction);
        let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDSLE54inL7zPTG2uETosKMmNnVXA3yju4`);

        if (resp.data.status === 'ZERO_RESULTS') {
            throw new Error(`There are results for the city ${ direction.yellow }`);
        }

        let location = resp.data.results[0].formatted_address;
        let lat = resp.data.results[0].geometry.location.lat;
        let lng = resp.data.results[0].geometry.location.lng;
        // console.log( JSON.stringify( resp.data, undefined, 2 ));
        // console.log(location);
        // console.log(lat);
        // console.log(lng);

        return {
            direction: location,
            lat,
            lng
        }
    }
}