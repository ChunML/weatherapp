import React from 'react';

export default function CityNavBar({ cities, currentCity, onUpdateCity }) {
  return (
    <ul className='flex-center'>
      {cities.map(city => (
        <li key={city}>
          <button
            className='btn-clear nav-link'
            onClick={() => onUpdateCity(city)}
            style={city == currentCity ? { color: 'rgb(187, 46, 31)' } : null}>
            {city}
          </button>
        </li>
      ))}
    </ul>
  );
}