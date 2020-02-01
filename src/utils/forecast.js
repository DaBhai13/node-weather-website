const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/24eab7872687796407d1f7f64eab9cff/'+longitude+','+latitude;
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.');
        } else if (body.error) {
            callback(body.error);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. 
            There is a ${body.currently.precipProbability}% chance of rain.
            With a humidity of ${body.daily.data[0].humidity}`);
        }
    });
}

module.exports = forecast;