import { useEffect, useState } from "react";

function Weather() {
  const [city, setCity] = useState("pune");
  const [weather, setWeather] = useState("");
  //-----
  const fetchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c85f7ce022f3219cd6024aeae9f486c3&units=metric`,
    );
    const data = await res.json();
    setWeather(data);
  };
  //-----
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <>
      <h1>Weather</h1> <hr />
      <input
        type="text"
        name="city"
        value={city}
        placeholder="enter city to check weather"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => fetchWeather()}>check weather</button>
      <div>
        {weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].main}</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Weather;
