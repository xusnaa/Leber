import React, { useState } from "react";

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "f48ac869bf2e998b4c209b54dd917e26"; // Replace with your API key

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        setError(null);
        fetchWeatherByCoords(latitude, longitude);
      });
    } else {
      setError("Geolocation is not supported by your browser");
    }
  };

  const fetchCities = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${query}&format=json`
      );
      const data = await response.json();
      setSuggestions(data.map((city) => city.display_name));
    } catch (err) {
      console.error("Error fetching city suggestions", err);
    }
  };

  const fetchWeatherByCity = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError("City not found");
      }
    } catch (err) {
      console.error("Error fetching weather data", err);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError("Weather data not found");
      }
    } catch (err) {
      console.error("Error fetching weather data", err);
    }
  };

  return (
    <div className="bg-gray-900 h-[100vh] w-screen">
      <div className="relative flex flex-col gap-12 items-center p-7">
        <div className="flex items-center justify-center w-full mt-20 gap-10 relative">
          <input
            className="rounded-full w-1/3 bg-transparent border border-white/10 p-2 text-center text-slate-300"
            placeholder="Search location..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              fetchCities(e.target.value);
            }}
          />
          <button
            className="p-2 bg-transparent border-e-2 border-slate-200 text-slate-300 rounded-full text-center"
            onClick={detectLocation}
          >
            Detect My Location
          </button>

          {suggestions.length > 0 && (
            <ul className="absolute top-14 left-1/3 bg-gray-800 border border-white/10 rounded-lg w-1/3 text-slate-300">
              {suggestions.map((city, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-700"
                  onClick={() => {
                    setSearch(city);
                    setSuggestions([]);
                    fetchWeatherByCity(city.split(",")[0]);
                  }}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {weather && (
          <div className="w-2/4 h-[300px] bg-transparent backdrop-blur-lg border border-white/10 p-4 rounded-2xl text-center text-slate-300">
            <h2 className="text-2xl font-bold">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-xl mt-2">{weather.weather[0].description}</p>
            <p className="text-3xl mt-4">{Math.round(weather.main.temp)}°C</p>
            <p className="text-md mt-2">Humidity: {weather.main.humidity}%</p>
            <p className="text-md">Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}

        <div className="w-2/4 h-[300px] bg-transparent backdrop-blur-lg border border-white/10 p-4 rounded-2xl text-center text-slate-300"></div>
      </div>
    </div>
  );
};

export default Weather;
