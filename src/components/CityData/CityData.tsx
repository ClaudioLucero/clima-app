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
      <div className="city-data-city">
        {name}
        {today}
      </div>
      <div className="city-data-temps">
        <div className="city-data-temps-max">
          {todayTemp.max_temp}
        </div>
        <div className="city-data-temps-min">
          {todayTemp.min_temp}
        </div>
      </div>
    </div>
  );
};

export default DataCity;
