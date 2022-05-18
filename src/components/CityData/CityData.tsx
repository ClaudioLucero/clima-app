/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { getToday } from '../../utils/utils';
import { City } from '../../models/City';
import './CityData.css';

interface Props {
  current: City,
}

const DataCity: React.FC<Props> = ({ current }: Props) => {
  const today = getToday();
  const { name, todayTemp } = current;
  return (
    <div className="city-data-main">
      <div className="city-data-left">
        <div className="city-data-day">
          {today}
        </div>
        <div className="city-data-city">
          {name}
        </div>
      </div>
      <div className="city-data-right">
        <div className="city-data-main-info">
          <div className="city-data-temps-image" style={{ background: `url(http://openweathermap.org/img/wn/${todayTemp.icon}.png)`, backgroundRepeat: 'no-repeat' }} />
          <div className="city-data-temps-max">
            {todayTemp.max_temp}
            °C
          </div>
        </div>
        <div className="city-data-temps">
          <div className="city-data-temps-description">
            {todayTemp.description}
            <br />
            Feel like
            {' '}
            {todayTemp.feels_like}
            °C
            <br />
            Humidity
            {' '}
            {todayTemp.humidity}
            %
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCity;
