/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { City } from '../../models/City';
import './CityData.css';

interface Props {
  current: City,
}

const DataCity: React.FC<Props> = ({ current }: Props) => {
  const { name, temps } = current;
  return (
    <div className="city-data-main">
      <div className="city-data-city">
        {name}
      </div>
      <div className="city-data-temps">
        <div className="city-data-temps-max">
          {temps[0].max}
        </div>
        <div className="city-data-temps-min">
          {temps[0].min}
        </div>
      </div>
    </div>
  );
};

export default DataCity;
