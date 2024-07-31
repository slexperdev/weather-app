import React, {createContext, useContext, useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

import {Constants} from '../Constant';
import {getNightTime} from '../Util';

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isNight, setIsNight] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get the current location of the user
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;

        fetchWeather(latitude, longitude);
      },
      error => {
        setIsLoading(false);
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  // Fetch the current location weather data by latitude and longitude
  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Constants.OPENWEATHER_API_KEY}&units=metric`,
      );
      const data = response.data;
      setWeatherData(data);

      const isNightTime = getNightTime(data);
      setIsNight(isNightTime);
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        isNight,
        setWeatherData,
        isLoading,
        setIsLoading,
        setIsNight,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};
