import React from 'react'

const WeatherBox = ({weather}) => {
    console.log('weather?',weather)
  return (
    <div className='WeatherBox'>
      <div>{weather?.name}</div>
      <h2>{(weather?.main.temp)?.toFixed(1)} 도/ {(weather?.main.temp*1.8+32)?.toFixed(1)}화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
