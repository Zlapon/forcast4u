import { useState } from "react";
import "../Styles/SearchBar.css";
import { useNavigate } from "react-router-dom";
import GeocodingApi from "./Apis/GeocodingApi";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearch("");
    e.preventDefault(); // Prevent default form submission
    navigate(
      `/weather?lat=${cities.results[0].geometry.lat}&lng=${cities.results[0].geometry.lng}&s=${cities.results[0]}`
    ); // Navigate to the new route
  };
  return (
    <div className="searchbar">
      <form className="searchbar-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search a place"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="searchbar-input"
          value={search}
        />
        <button className="searchbar-btn">
          <img
            src="images/SearchBar/searchicon.png"
            alt=""
            className="searchbar-searchicon"
          />
        </button>
      </form>
      {search ? (
        <div className="searchbar-locations">
          {cities.results?.map((city, i) => {
            return (
              <Link
                key={i}
                to={`/weather?lat=${city.geometry.lat}&lng=${city.geometry.lng}`}
              >
                {city.formatted}
              </Link>
            );
          })}
        </div>
      ) : (
        <></>
      )}

      <GeocodingApi cityName={search} setApi={setCities} />
    </div>
  );
};

export default SearchBar;
