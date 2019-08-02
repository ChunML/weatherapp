import React from 'react';

import { getCurrentWeather } from '../utils/api';
import CityNavBar from './CityNavBar';
import WeatherDetail from './WeatherDetail';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: ['Yokohama', 'Taipei', 'Tokyo'],
      currentCity: 'Yokohama',
      weatherInfos: {},
      error: null
    };

    this.updateCurrentCity = this.updateCurrentCity.bind(this);
  }

  componentDidMount() {
    this.updateCurrentCity(this.state.currentCity);
  }

  updateCurrentCity(currentCity) {
    this.setState({
      currentCity,
      error: null
    });

    getCurrentWeather(currentCity)
      .then(data => this.setState(({ weatherInfos }) => ({
        weatherInfos: {
          ...weatherInfos,
          [currentCity]: data
        }
      })))
      .catch(() => {
        console.warn('Error getting weather info', error);

        this.setState({
          error: 'There was some problem getting weather information for the specified city!'
        });
      });
  }

  render() {
    const { cities, currentCity, weatherInfos, error } = this.state;

    if (weatherInfos[currentCity]) {
      console.log(this.state.weatherInfos[currentCity])
    }

    return (
      <React.Fragment>
        <CityNavBar
          cities={cities}
          currentCity={currentCity}
          onUpdateCity={this.updateCurrentCity}
        />
        {weatherInfos[currentCity] && (
          <WeatherDetail
            weatherInfo={weatherInfos[currentCity]}
          />
        )}
      </React.Fragment>
    );
  }
}