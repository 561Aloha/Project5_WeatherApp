import React, { useState, useEffect } from 'react';
import './App.css';

const API_KEY = "4ca1123b190f4404b2b5c707fae3d1a4";
const CITY_NAME = "Raleigh"; // or any other city you desire

function Card() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&city=${CITY_NAME}`);
        const data = await response.json();
        setWeatherData(data.data[0]); // Assuming the API response contains an array of data with the first element representing current weather
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-summary-card">
      {weatherData && (
        <div className="card-container">
          <div className='weather-detail-box'>
            <h3>City:</h3>
            <p>{weatherData.city_name}</p>
          </div>
          <div className='weather-detail-box'>
            <h3>Temperature:</h3>
            <p>{weatherData.temp}°C</p>
          </div>
          <div className='weather-detail-box'>
            <h3>Weather Description:</h3>
            <p>{weatherData.weather.description}</p>
          </div>
          <div className='weather-detail-box'>
            <h3>Weather Icon:</h3>
            <img className='img-icon' src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`} alt="Weather Icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
