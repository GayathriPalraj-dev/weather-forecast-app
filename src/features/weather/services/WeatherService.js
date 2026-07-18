const API_KEY = "c81bf88fd456147d760c3adcaeab325b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city) {
  const query = encodeURIComponent(city);
  const response = await fetch(
    `${BASE_URL}/weather?q=${query}&appid=${API_KEY}&units=metric`
  );

  return response.json();
}

export async function getForecast(city) {
  const query = encodeURIComponent(city);
  const response = await fetch(
    `${BASE_URL}/forecast?q=${query}&appid=${API_KEY}&units=metric`
  );

  return response.json();
}

export async function getLocationWeather(lat, lon) {
  const response = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return response.json();
}
