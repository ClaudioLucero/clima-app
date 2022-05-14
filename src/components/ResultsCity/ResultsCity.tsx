/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import './ResultsCity.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { City } from '../../models/City';

interface Props {
  results: City[],
  callbackValueSearch:Function
}
const ResultsCity: React.FC<Props> = ({ results, callbackValueSearch }: Props) => {
  const selectResultCity = (city: City) => {
    callbackValueSearch(city);
  };

  const cities = results.map((city) => (
    <div
      role="button"
      tabIndex={0}
      className="results-city-res"
      key={city.id}
      onClick={() => { selectResultCity(city); }}
      onKeyDown={() => { selectResultCity(city); }}
    >
      <p className="results-city-name">
        {city.name}
      </p>
      {city.fav === true
        ? <AiFillStar className="results-city-ico" />
        : <AiOutlineStar className="results-city-ico" />}
    </div>
  ));

  return (
    <div className="results-city">
      {cities}
    </div>
  );
};

export default ResultsCity;
