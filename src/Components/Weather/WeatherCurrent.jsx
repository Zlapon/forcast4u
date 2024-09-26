import PropTypes from "prop-types";
import "../../Styles/WeatherCurrent.css";
const WeatherCurrent = ({ dataWeather, dataUnits, city }) => {
  if (!dataWeather || !dataUnits) {
    return <div></div>;
  }
  return (
    <div className="weathercurrent">
      <div className="weathercurrent-title">
        <img
          src={`/Weather/wi-${dataWeather.is_day ? "day" : "night"}-fog.svg`}
          alt="Logo"
        />
        <div className="weathercurrent-head">
          <div>{city}</div>
        </div>
        <div className="weathercurrent-info">
          <div>
            {dataWeather.temperature_2m}
            {dataUnits.temperature_2m}
          </div>
        </div>
      </div>
    </div>
  );
};
WeatherCurrent.propTypes = {
  dataWeather: PropTypes.object,
  dataUnits: PropTypes.object,
};
export default WeatherCurrent;
