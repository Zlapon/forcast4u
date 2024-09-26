import PropTypes from "prop-types";
import { useEffect } from "react";

const GeocodingApi = ({ cityName, setApi }) => {
  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${/*enter api key*/}`
      );
      const data = await response.json();
      setApi(data);
      console.log(data);
    }
    fetchApi();
  }, [cityName, setApi]);

  return <div></div>;
};
GeocodingApi.propTypes = {
  cityName: PropTypes.string.isRequired,
  setApi: PropTypes.func.isRequired,
};
export default GeocodingApi;
