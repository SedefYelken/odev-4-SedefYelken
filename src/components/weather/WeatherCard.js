import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({
  dt,
  temp_min,
  temp_max,
  main,
  icon,
  humidity,
  wind,
}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <Card
      className="weatherCard"

    >
      <Card.Img className = "weather-image"
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body className = "cardBody">
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>
          Min: {temp_min}
          {"\u00b0"}
        </p>
        {/* maximum temperature */}
        <p>
          Max: {temp_max}
          {"\u00b0"}
        </p>
        <p>Humidity: {humidity} %</p>
        <p>Wind : {wind} km/s</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
