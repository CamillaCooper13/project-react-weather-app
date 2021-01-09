import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

if (loaded) {
    return (
        <div className="WeatherForecast row">
   <div className="col">
       10:00
  <WeatherIcon code={forecast.list[0].weather[0].icon} />
  {Math.round(forecast.list[0].main.temp)}°C
        </div>
      <div className="col">
       {new Date(forecast.list[1].dt * 1000).getHours()}:00
  <WeatherIcon code={forecast.list[1].weather[0].icon} />
  {Math.round(forecast.list[1].main.temp)}°C
        </div>
           <div className="col">
        {new Date(forecast.list[2].dt * 1000).getHours()}:00
  <WeatherIcon code={forecast.list[2].weather[0].icon} />
  {Math.round(forecast.list[2].main.temp)}°C
        </div>
            <div className="col">
        {new Date(forecast.list[3].dt * 1000).getHours()}:00
  <WeatherIcon code={forecast.list[3].weather[0].icon} />
  {Math.round(forecast.list[3].main.temp)}°C
        </div>
            <div className="col">
        {new Date(forecast.list[4].dt * 1000).getHours()}:00
  <WeatherIcon code={forecast.list[4].weather[0].icon} />
  {Math.round(forecast.list[4].main.temp)}°C
        </div>
        </div>
    );
} else {
    let apiKey = "8c03abbdd5f78bfba8c1df25fce030aa";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
   axios.get(url).then(handleForecastResponse);

    return  null;
}
}
