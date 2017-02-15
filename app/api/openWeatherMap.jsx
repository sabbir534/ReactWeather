var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e0e1b0a3b4eb47878947a201c5a4c688&units=imperial';
//e0e1b0a3b4eb47878947a201c5a4c688
// var data = JSON.stringify(res.data);
// var parsedData = JSON.parse(data);
module.exports = {
    getTemp(location){
        var encodedLocation = encodeURIComponent(location);
        var requrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requrl).then(res => {
            var data = JSON.stringify(res.data);
            var parsedData = JSON.parse(data);            
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return parsedData.main.temp;  
            }
            
        }, res => {
            throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
        });
    }
}

