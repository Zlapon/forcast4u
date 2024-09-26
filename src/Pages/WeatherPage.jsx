import { useState } from "react";
import WeatherApi from "../Components/Apis/WeatherApi";
import WeatherCurrent from "../Components/Weather/WeatherCurrent";
import WeatherHourly from "../Components/Weather/WeatherHourly";
import { useSearchParams } from "react-router-dom";
import NavBar from "../Components/NavBar";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [searchParams] = useSearchParams();
  return (
    <div>
      <NavBar />

      <WeatherCurrent
        dataWeather={weatherData.current}
        dataUnits={weatherData.current_units}
        city={searchParams.get("s")}
      />
      <WeatherHourly
        dataWeather={weatherData.hourly}
        dataUnits={weatherData.hourly_units}
      />
      <WeatherApi
        latitude={Number(searchParams.get("lat"))}
        longtitude={Number(searchParams.get("lng"))}
        setApi={setWeatherData}
      />
    </div>
  );
};

export default WeatherPage;
