import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const WeatherButton = ({ cities, city, setCity, getCurrentLocation }) => {
  return (
    <div id="WeatherButton" className="menu-container" >
      <Button 
      variant="warning"
      onClick={()=>{
        getCurrentLocation()
      }}
      >
        Current Location</Button>
      {cities.map((item) => (
        <Button
          variant="warning"
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
