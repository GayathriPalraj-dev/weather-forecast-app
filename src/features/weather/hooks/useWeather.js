import { useState } from "react";
import {
  getForecast,
  getLocationWeather,
  getWeather,
} from "../services/WeatherService";

function getDailyForecast(forecastList = []) {
  return forecastList.filter((_, index) => index % 8 === 0);
}

function isSuccessfulWeatherResponse(data) {
  return data?.cod === 200 || data?.cod === "200";
}

function getErrorMessage(data, fallbackMessage) {
  return data?.message || fallbackMessage;
}

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchWeather = async (city) => {
    const trimmedCity = (city || "").trim();

    if (!trimmedCity) {
      setError("Please enter a city name");
      setWeather(null);
      setForecast([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const weatherData = await getWeather(trimmedCity);

      if (!isSuccessfulWeatherResponse(weatherData)) {
        setError(getErrorMessage(weatherData, "City not found"));
        setWeather(null);
        setForecast([]);
        return;
      }

      const forecastData = await getForecast(trimmedCity);

      setWeather(weatherData);
      setForecast(getDailyForecast(forecastData?.list));
    } catch {
      setError("Something went wrong");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const searchByCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        setLoading(true);
        setError("");

        try {
          const weatherData = await getLocationWeather(latitude, longitude);

          if (!isSuccessfulWeatherResponse(weatherData)) {
            setError(getErrorMessage(weatherData, "Location weather not found"));
            setWeather(null);
            setForecast([]);
            return;
          }

          setWeather(weatherData);
          setForecast([]);
        } catch {
          setError("Something went wrong");
          setWeather(null);
          setForecast([]);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied");
      }
    );
  };

  return {
    weather,
    forecast,
    error,
    loading,
    searchWeather,
    searchByCurrentLocation,
  };
}
