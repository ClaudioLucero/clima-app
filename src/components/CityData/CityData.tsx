/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Fragment, useState } from 'react';
import { City } from '../../models/City';
import './CityData.css';

const DataCity = () => (
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
