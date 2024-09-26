import dayClear from "../../Assets/Weather/wi-day-sunny.svg";
import nightClear from "../../Assets/Weather/wi-night-clear.svg";
import dayRain from "../../Assets/Weather/wi-day-rain.svg";
import nightRain from "../../Assets/Weather/wi-night-rain.svg";
import dayCloudy from "../../Assets/Weather/wi-day-cloudy.svg";
import nightCloudy from "../../Assets/Weather/wi-night-cloudy.svg";
import daySnow from "../../Assets/Weather/wi-day-snow.svg";
import nightSnow from "../../Assets/Weather/wi-night-snow.svg";
import dayCloudyWindy from "../../Assets/Weather/wi-day-cloudy-windy.svg";
import nightCloudyWindy from "../../Assets/Weather/wi-night-cloudy-windy.svg";
import daySnowWindy from "../../Assets/Weather/wi-day-snow-wind";
import nightSnowWindy from "../../Assets/Weather/wi-night-snow-wind";
import dayWindy from "../../Assets/Weather/wi-day-windy.svg";
import nightWindy from "../../Assets/Weather/wi-night-windy.svg";
import dayRainWindy from "../../Assets/Weather/wi-day-rain-wind.svg";
import nightRainWindy from "../../Assets/Weather/wi-night-rain-wind.svg";
const WeatherImages = (type) => {
  const images = [
    { src: dayClear, day: 0, rain: 1, snow: 1, cloudy: 1, wind: 1 },
    { src: nightClear, day: 1, rain: 1, snow: 1, cloudy: 1, wind: 1 },
    { src: dayRain, day: 0, rain: 0, snow: 1, cloudy: 1, wind: 1 },
    { src: nightRain, day: 1, rain: 0, snow: 1, cloudy: 1, wind: 1 },
    { src: dayCloudy, day: 0, rain: 1, snow: 1, cloudy: 0, wind: 1 },
    { src: nightCloudy, day: 1, rain: 1, snow: 1, cloudy: 0, wind: 1 },
    { src: daySnow, day: 0, rain: 1, snow: 0, cloudy: 1, wind: 1 },
    { src: nightSnow, day: 1, rain: 1, snow: 0, cloudy: 1, wind: 1 },
    { src: dayCloudyWindy, day: 0, rain: 1, snow: 1, cloudy: 0, wind: 0 },
    { src: nightCloudyWindy, day: 1, rain: 1, snow: 1, cloudy: 0, wind: 0 },
    { src: daySnowWindy, day: 0, rain: 1, snow: 0, cloudy: 1, wind: 0 },
    { src: nightSnowWindy, day: 1, rain: 1, snow: 0, cloudy: 1, wind: 0 },
    { src: dayWindy, day: 0, rain: 1, snow: 1, cloudy: 1, wind: 0 },
    { src: nightWindy, day: 1, rain: 1, snow: 1, cloudy: 1, wind: 0 },
    { src: dayRainWindy, day: 0, rain: 0, snow: 1, cloudy: 1, wind: 0 },
    { src: nightRainWindy, day: 1, rain: 0, snow: 1, cloudy: 1, wind: 0 },
  ];
  return <img></img>;
};

export default WeatherImages;
