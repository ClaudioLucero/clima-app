/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Fragment, useState } from 'react';
import SearchCities from '../SearchCities/SearchCities';
import Favorites from '../Favorites/Favorites';
import { City } from '../../models/City';
import './CityData.css';

interface Props{
    city:City
}
const DataCity = ({ city }:Props) => (
  <div className="city-data-main">
    <div className="city-data-city">
      San Luis
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

export default DataCity;
