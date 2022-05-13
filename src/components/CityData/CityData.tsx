/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { City } from '../../models/City';
import './CityData.css';

interface Props {
  current: City,
}

const DataCity: React.FC<Props> = ({ current }: Props) => {
  const { name } = current;
  return (
    <div className="city-data-main">
      <div className="city-data-city">
        {name}
      </div>
      <div className="city-data-temps">
        <div className="city-data-temps-max">
          30º
        </div>
        <div className="city-data-temps-min">
          21º
        </div>
      </div>
    </div>
  );
};

export default DataCity;
