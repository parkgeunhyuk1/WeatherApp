import { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["MOSCOW", "SEOUL", "NEW YORK", "PARIS"];
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const getCurrentLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      setLoading(false);
    });
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5a8c13b789b8a02ee32533666cff55f&units=metric`;
    setLoading(true);
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e5a8c13b789b8a02ee32533666cff55f&units=metric`;
    setLoading(true);
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);
  return (
    <>
      {loading ? (
        <div className="Container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="Container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            city={city}
            setCity={setCity}
            getCurrentLocation={getCurrentLocation}
          />
        </div>
      )}
    </>
  );
}

export default App;
