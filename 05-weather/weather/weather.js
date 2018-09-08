const axios = require('axios'),
    colors = require('colors');

let functions = {
    getWeather: async(lat, lng) => {
        let url_weather = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=376d2b450782908c6b41564342db8c2a`;
        let weather = await axios.get(url_weather);
        // console.log(weather.data.main)
        if (weather.data.cod === 200) {
            let main = weather.data.main,
                temp = main.temp;

            return temp;
        } else {
            throw new Error(`There is not result weather for coordinates [ ${ colors.red( lat )}, ${ colors.red( lng )} ]`);
        }

    }
}

module.exports = functions;