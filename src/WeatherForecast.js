import React, { useState } from "react";

import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

if(loaded) {
    return (
        <div className="WeatherForecast row">
                <WeatherForecastPreview data={forecast.list[0] }/>
        </div>
    );

} else {
    let apiKey = "8c03abbdd5f78bfba8c1df25fce030aa";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
   axios.get(url).then(handleForecastResponse);
    return  null;
}
}