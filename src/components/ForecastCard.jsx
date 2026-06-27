const ForecastCard = ({ forecast }) => {
  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>

      <div className="forecast-list">
        {forecast.map((day) => {
          // Convert date string to Date object
          const date = new Date(day.dt_txt);

          // Get day name (Fri, Sat, Sun...)
          const dayName = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <div
              key={day.dt_txt}
              className="forecast-item"
            >
              <p className="forecast-day">{dayName}</p>

              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="forecast-icon"
              />

              <h3 className="forecast-temp">
                {Math.round(day.main.temp)}°C
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastCard;