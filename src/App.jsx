import { useState } from "react";
import "./App.css";
import SearchBar from "./features/weather/components/SearchBar";
import WeatherCard from "./features/weather/components/WeatherCard";
import ForecastCard from "./features/weather/components/ForecastCard";
import { useWeather } from "./features/weather/hooks/useWeather";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const {
    weather,
    forecast,
    error,
    loading,
    searchWeather,
    searchByCurrentLocation,
  } = useWeather();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="theme-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>

        <span className="theme-text">{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
      </div>

      <h1 className="app-title">Weather App</h1>

      <SearchBar onSearch={searchWeather} />

      <button className="location-btn" onClick={searchByCurrentLocation}>
        📍 Use My Location
      </button>

      {loading && <h2>⏳ Loading Weather...</h2>}

      {error && <p>{error}</p>}

      {weather && <WeatherCard weather={weather} />}

      {forecast.length > 0 && <ForecastCard forecast={forecast} />}
    </div>
  );
}

export default App;
