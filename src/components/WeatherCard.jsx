import { useState, useEffect } from "react";

const WeatherCard = ({ weather }) => {
  let weatherIcon = "";

  switch (weather.weather[0].main) {
    case "Clear":
      weatherIcon = "☀️";
      break;

    case "Clouds":
      weatherIcon = "☁️";
      break;

    case "Rain":
      weatherIcon = "🌧️";
      break;

    case "Thunderstorm":
      weatherIcon = "⛈️";
      break;

    case "Snow":
      weatherIcon = "❄️";
      break;

    case "Mist":
      weatherIcon = "🌫️";
      break;

    default:
      weatherIcon = "🌤️";
  }

  const sunrise = new Date(
  weather.sys.sunrise * 1000
).toLocaleTimeString();

const sunset = new Date(
  weather.sys.sunset * 1000
).toLocaleTimeString();

const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);

const currentDate = currentTime.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

  return (
    <div className="weather-card">
      <img
  className="weather-image"
  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
  alt="weather icon"
/>

      <h2 className="city-name">
  📍 {weather.name}, {weather.sys.country}
</h2>

      <p className="current-time">
  🕒 {currentTime.toLocaleTimeString()}
</p>

<p className="current-date">
  📅 {currentDate}
</p>

      <h1 className="temperature">
        {Math.round(weather.main.temp)}°C
      </h1>

      <p className="feels-like">
  Feels Like: {Math.round(weather.main.feels_like)}°C
</p>


    <div className="info-container">

  <div className="info-card">
    <h4>💧 Humidity</h4>
    <p>{weather.main.humidity}%</p>
  </div>

  <div className="info-card">
    <h4>📈 Pressure</h4>
    <p>{weather.main.pressure} hPa</p>
  </div>

  <div className="info-card">
    <h4>🌅 Sunrise</h4>
    <p>{sunrise}</p>
  </div>

  <div className="info-card">
    <h4>🌇 Sunset</h4>
    <p>{sunset}</p>
  </div>

  <div className="info-card">
    <h4>☁️ Weather</h4>
    <p>{weather.weather[0].main}</p>
  </div>

  <div className="info-card">
    <h4>📝 Description</h4>
    <p>{weather.weather[0].description}</p>
  </div>

</div>

    </div>
  );
};

export default WeatherCard;