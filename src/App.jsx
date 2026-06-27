import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

 const API_KEY = "c81bf88fd456147d760c3adcaeab325b";

  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    setLoading(true);

    try {
      const response = await fetch(url);
      
      const data = await response.json();
      console.log("Forecast API:", data);

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
        return;
      }

      setError("");
      setWeather(data);
      setLoading(false);

      console.log(data);
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
      console.log(error);
    }
  };

  const handleSearch = (city) => {
  fetchWeather(city);
  fetchWeatherForecast(city);
};

  const fetchLocationWeather = () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

      try {
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
          setError(data.message);
          setWeather(null);
          setLoading(false);
          return;
        }

        setError("");
        setWeather(data);
        setLoading(false);

        console.log(data);
      } catch (error) {
        setError("Something went wrong");
        setLoading(false);
      }
    },
    (error) => {
      setError("Location permission denied");
      console.log(error);
    }
  );
};
const fetchWeatherForecast = async (city) => {
  console.log("Forecast function called!", city);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  // 👇 ADD THIS
  console.log("Forecast URL:", url);

  setLoading(true);

  try {
    const response = await fetch(url);

    // 👇 ADD THIS
    console.log("Response:", response);

    const data = await response.json();

    // 👇 ADD THIS
    console.log("Forecast API:", data);

    const forecastData = data.list;

    const dailyForecast = forecastData.filter((item, index) => {
      return index % 8 === 0;
    });

    // 👇 ADD THIS
    console.log("Daily Forecast:", dailyForecast);

    setForecast(dailyForecast);
    setLoading(false);

  } catch (error) {
    console.error(error);
    setError("Something went wrong");
    setLoading(false);
  }
};


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

  <span className="theme-text">
    {darkMode ? "🌙 Dark" : "☀️ Light"}
  </span>
</div>

      <h1 className="app-title">Weather App</h1>

      <SearchBar onSearch={handleSearch} />

      <button
  className="location-btn"
  onClick={fetchLocationWeather}
>
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
 