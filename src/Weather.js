import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
         <div className="Weather">
             <form>
                 <div className="row">
                     <div className="col-9">
                 <input 
                 type="search"
                 placeholder="Enter a city..."
                 className="form-control"
                 autoFocus="on"
                 />
                 </div>
                 <div className="col-3">
                 <input type="submit" value="Search"
                 className="btn btn-primary" />
                 </div>
                 </div>
             </form>
    <h1>Honolulu</h1>
    <ul>
        <li>Tuesday 11:28</li>
        <li>Partly cloudy</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix weather-temperature">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
            className="float-left"
            />
            <div className="float=left">
           <span className="temperatue"><strong>25</strong></span>
           <span className="unit">°C</span> 
        </div>
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 95%</li>
                <li>Humidity: 78%</li>
                <li>Wind: 8 km/h</li>
            </ul>
        </div>
    </div>
    </div>
    );
}