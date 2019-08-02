import React from 'react';
import { FaTint, FaTachometerAlt, FaTemperatureHigh, FaTemperatureLow, FaWind } from 'react-icons/fa';

export default function WeatherDetail({ weatherInfo }) {
  const { humidity, pressure, temp, temp_max, temp_min } = weatherInfo.main;

  const { main, description } = weatherInfo.weather[0];

  const { deg, speed } = weatherInfo.wind;

  return (
    <div className='container-sm'>
      <h1 className='header-super-lg center-text no-margin'>
        {temp}&#8451;
      </h1>
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