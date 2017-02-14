var React = require('react');

var WeatherMessage = ({location, temp}) => {
    //var {location, temp} = props;
    return (
        <h2>It's {temp} in {location}.</h2>
    );
}
module.exports = WeatherMessage;