import PropTypes from "prop-types";
import "../../Styles/WeatherHourly.css";
const WeatherHourly = ({ dataWeather, dataUnits, gmt }) => {
  if (!dataWeather || !dataUnits) {
    return <div></div>;
  }
  console.log(dataWeather);
  return (
    <div className="weatherhourly">
      {dataWeather.time.map((time, i) => {
        return (
          <div className="weatherhourly-hour" key={i}>
            <div className="weatherhourly-title">
              <div>
                {dataWeather.temperature_2m[i]}
                {dataUnits.temperature_2m}
              </div>
            </div>
            <div className="weatherhourly-time">{time.slice(-5)}</div>
            <div className="weatherhourly-info">
              <div>
                humidity: {dataWeather.relative_humidity_2m[i]}
                {dataUnits.relative_humidity_2m}
              </div>
              <div>
                wind speed: {dataWeather.wind_speed_10m[i]}
                {dataUnits.wind_speed_10m}
              </div>
              <div>
                UV: {dataWeather.uv_index[i]}
                {dataUnits.uv_index}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
WeatherHourly.propTypes = {
  dataWeather: PropTypes.object,
  dataUnits: PropTypes.object,
};
export default WeatherHourly;
