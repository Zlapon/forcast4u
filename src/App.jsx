import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import WeatherPage from "./Pages/WeatherPage";
import "./app.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
