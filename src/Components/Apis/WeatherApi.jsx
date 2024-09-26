import { useEffect } from "react";
import PropTypes from "prop-types";
const WeatherApi = ({ latitude, longtitude, setApi }) => {
  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&current=temperature_2m,is_day,relative_humidity_2m,snowfall,cloud_cover,rain,precipitation,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation,wind_speed_10m,uv_index,is_day&daily=sunrise,sunset,precipitation_sum`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setApi(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchApi();
  }, [setApi, latitude, longtitude]);
  return <div></div>;
};
WeatherApi.propTypes = {
  latitude: PropTypes.number.isRequired,
  longtitude: PropTypes.number.isRequired,
  setApi: PropTypes.func.isRequired,
};
export default WeatherApi;
