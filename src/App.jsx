import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import Navbar from './Navbar';
import List from './List';
import background from "./assets/cloud.jpeg";

function App() {
  const [weatherDataList, setWeatherDataList] = useState([]);
  const [filteredWeatherDataList, setFilteredWeatherDataList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [temperatureFilter, setTemperatureFilter] = useState(0);

  const predefinedCities = [

    { city_name: 'Miami', country_code: 'US' },
    { city_name: 'Palm Beach', country_code: 'US' },
    { city_name: 'Raleigh', country_code: 'US' },
    { city_name: 'London', country_code: 'GB' },
    { city_name: 'Tokyo', country_code: 'JP' },
    { city_name: 'New York', country_code: 'US' },
    { city_name: 'Seattle', country_code: 'US' },

    { city_name: 'Birmingham', country_code: 'GB' },
    { city_name: 'Manchester', country_code: 'GB' },
    { city_name: 'Kyoto', country_code: 'JP' },
    { city_name: 'Yokohama', country_code: 'JP' },
    { city_name: 'Ottawa', country_code: 'CA' },
    { city_name: 'Toronto', country_code: 'CA' },

    { city_name: 'Mexico City', country_code: 'MX' },
    { city_name: 'Cancun', country_code: 'MX' },
    { city_name: 'Guadalajara', country_code: 'MX' },

  ];

  useEffect(() => {
    fetchWeatherForCities();
  }, []);

  const fetchWeatherForCities = async () => {
    const apiKey = '4ca1123b190f4404b2b5c707fae3d1a4';
    const apiUrlBase = 'https://api.weatherbit.io/v2.0/current';
    
    try {
      const weatherDataList = [];
      for (const city of predefinedCities) {
        const response = await fetch(`${apiUrlBase}?key=${apiKey}&city=${city.city_name}&country=${city.country_code}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        weatherDataList.push(weatherData);
      }

      setWeatherDataList(weatherDataList);
      setFilteredWeatherDataList(weatherDataList); // Initialize filtered list with all data
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    const filteredData = weatherDataList.filter(weatherData =>
      weatherData.data[0].city_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredWeatherDataList(filteredData);
  };

  const handleTemperatureChange = (value) => {
    setTemperatureFilter(value);
    const filteredData = weatherDataList.filter(weatherData =>
      weatherData.data[0].temp <= value
    );
    setFilteredWeatherDataList(filteredData);
  };

  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      }}>
      <h1 className='weather_header'> Weather Attributes Form </h1>
      <Card />
      <Navbar />
      <div className='user'>
      <input className='user-input'
        type="text"
        placeholder="Search city..."
        value={searchInput}
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className='lil-box'>
      <p>Temperature Filter: {temperatureFilter}</p>
      <input className='slider'
        type="range"
        min={0}
        max={40}
        value={temperatureFilter}
        onChange={(e) => handleTemperatureChange(e.target.value)}
      /></div>
    
      <List weatherDataList={filteredWeatherDataList} /></div>
    </div>
  );
}

export default App;
