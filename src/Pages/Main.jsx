import NavBar from "../Components/NavBar";
import WeatherApi from "../Components/Apis/WeatherApi";

const Main = () => {
  return (
    <div>
      <NavBar />
      <WeatherApi latitude={20} longtitude={200}></WeatherApi>
    </div>
  );
};

export default Main;
