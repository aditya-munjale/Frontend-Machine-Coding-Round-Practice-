import React, { useState } from "react";

const Wheather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const getWheather = async () => {
    if (city == "") return;
    setLoading(true);

    try {
      const responce = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=20ac422f77e24c1eba643508262702&q=${city}&aqi=yes`
      );

      const data = await responce.json();
      setWeather(data);
    } catch (err) {
      console.log("Error fetching weather", err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center px-4">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Weather Forecast
        </h1>

        <div className="flex gap-2 mb-5">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
            onClick={getWheather}
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="text-gray-600 animate-pulse">Loading...</p>
        )}

        {weather && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">
              {weather.location.name}, {weather.location.region}
            </h2>
            <p className="text-gray-500 mb-4">
              {weather.location.country}
            </p>

            <div className="flex flex-col items-center">
              <img
                src={weather.current.condition.icon}
                alt="weather icon"
                className="w-20 h-20"
              />
              <h3 className="text-lg text-gray-600 mt-2">
                {weather.current.condition.text}
              </h3>
              <p className="text-4xl font-bold text-blue-600 mt-2">
                {weather.current.temp_c}°C
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Wheather;