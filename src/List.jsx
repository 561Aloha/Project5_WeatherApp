import React from "react";
import './List.css';

const List = ({ weatherDataList}) => {

  return (
    <div className="list-container">
      <div className="city">
      <h3>City</h3>
          {weatherDataList.map((weatherData, index) => (
            <div key={index} className="weather-card">
              <p>{weatherData.data[0].city_name}</p>
            </div>
          ))}</div>

      <div className="city">
      <h3>Country</h3>
          {weatherDataList.map((weatherData, index) => (
            <div key={index} className="weather-card">
              <p>{weatherData.data[0].country_code}</p>
            </div>
          ))}
      </div>  

      <div className="city">
      <h3>Temperature</h3>
          {weatherDataList.map((weatherData, index) => (
            <div key={index} className="weather-card">
              <p>{weatherData.data[0].temp}°C</p>
            </div>
          ))}</div>  

      <div className="city">
      <h3>Weather Description</h3>
     
          {weatherDataList.map((weatherData, index) => (
            <div key={index} className="weather-card">
              <p>{weatherData.data[0].weather.description}°C</p>
            </div>
          ))}
        </div>  


      </div>

  );
};

export default List;



// <div className="element"><p>{weatherData.data[0].country_code}</p></div>
// <div className="element"><p>{weatherData.data[0].temp}°C</p></div>
// <div className="element"><p>{weatherData.data[0].weather.description}</p></div>