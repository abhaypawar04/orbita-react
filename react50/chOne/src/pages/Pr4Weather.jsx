import { useEffect, useState } from "react";

function Pr4Weather() {
  const [city, setCity] = useState("pune");
  const [weather, setWeather] = useState("");
  //--
  useEffect(() => {
    fetchWeather();
  }, []);
  //--
  const fetchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c85f7ce022f3219cd6024aeae9f486c3&units=metric`,
    );
    const data = await res.json();
    setWeather(data);
    console.log(data);
  };
  return (
    <>
      <h1> Weather</h1>
      <hr />
      <div>
        <input
          type="text"
          name="city"
          placeholder="enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={fetchWeather}> Fetch Weather</button>
      </div>

      <div>
        {weather && (
          <div>
            <h2>{weather.name}</h2>

            <p>Country: {weather.sys.country}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Description: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Pr4Weather;
