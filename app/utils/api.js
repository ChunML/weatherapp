const API_KEY = 'bb7bd8c4c1d60807a3a01d7e5d0abadb';

export function getCurrentWeather(currentCity) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&apikey=${API_KEY}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.weather) {
        throw new Error(data.message)
      }

      return data;
    });
}
