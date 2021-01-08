import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {

{new Date(props.data.dt_text).getDays()};
let day = days.getDay();
let days = [
"Sunday", 
"Monday",
 "Tuesday", 
 "Wednesday", 
 "Thursday",
  "Friday",
   "Saturday"
];
     return `${day}`;
   }

   function temperature(){
       let temperature =  Math.round(props.data.main.temp)
       return  `${temperature} °C`;
   }
   
    return (
        <div className="WeatherForecastPreview col">
            {Days()}
            <WeatherIcon code={props.data.weather[0].icon} />
         </div>
    );
      }
    
      
      
     
