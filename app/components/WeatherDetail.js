import React from 'react';
import { FaTint, FaTachometerAlt, FaTemperatureHigh, FaTemperatureLow, FaWind, FaCloudSun, FaQuestion, FaCloudMeatball, FaCloudShowersHeavy, FaSnowflake, FaUmbrella, FaSmog, FaCloud } from 'react-icons/fa';

function WeatherIcon({ description }) {
  let icon = null;

  const size = 100;

  switch (description) {
    case 'clear sky':
      icon = <FaSun size={size} />;
      break;
    case 'few clouds':
      icon = <FaCloudSun size={size} />;
      break;
    case 'scattered clouds':
      icon = <FaCloud size={size} />;
      break;
    case 'broken clouds':
      icon = <FaCloudMeatball size={size} />;
      break;
    case 'shower rain':
      icon = <FaUmbrella size={size} />;
      break;
    case 'rain':
      icon = <FaCloudRain size={size} />;
      break;
    case 'thunderstorm':
      icon = <FaCloudShowersHeavy size={size} />;
      break;
    case 'snow':
      icon = <FaSnowflake size={size} />;
      break;
    case 'mist':
      icon = <FaSmog size={size} />;
      break;
    default:
      return <FaQuestion size={size} />
  }

  return <div className='center-text'>{icon}</div>;
}

export default function WeatherDetail({ weatherInfo }) {
  const { humidity, pressure, temp, temp_max, temp_min } = weatherInfo.main;

  const { main, description } = weatherInfo.weather[0];

  const { deg, speed } = weatherInfo.wind;

  return (
    <div className='container-sm'>
      <h1 className='header-super-lg center-text no-margin'>
        {temp}&#8451;
      </h1>
      <WeatherIcon
        description={description}
      />
      <h4 className='header-sm center-text no-margin'>
        {description}
      </h4>
      <div className='summary flex-center row'>
        <div className='summary-item column'>
          <FaTint />
          <div>{humidity}%</div>
        </div>
        {/* <div className='summary-item column'>
          <FaTachometerAlt />
          <div>{pressure}mmHg</div>
        </div> */}
        <div className='summary-item column'>
          <div className='flex-center row'>
            <FaTemperatureHigh style={{ marginRight: '10px' }} />
            {temp_max}&#8451;
          </div>
          <div className='flex-center row'>
            <FaTemperatureLow style={{ marginRight: '10px' }} />
            {temp_min}&#8451;
          </div>
        </div>
        <div className='summary-item column'>
          <FaWind />
          <div>{speed}m/s {deg}&#176;</div>
        </div>
      </div>
    </div>
  );
}