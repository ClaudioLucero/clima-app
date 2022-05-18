/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import './ResultsCity.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { City } from '../../models/City';
import { Favorite } from '../../models/Favorite';

interface Props {
  results: Favorite[]
  callbackValueSearch: Function
  callbackEditeFavorites: Function
}
const ResultsCity: React.FC<Props> = ({
  results, callbackValueSearch, callbackEditeFavorites,
}: Props) => {
  const selectResultCity = (city: Favorite) => {
    callbackValueSearch(city);
  };

  const deleteFavorite = (city:Favorite) => {
    callbackEditeFavorites(city, 'delete');
  };
  const addFavorite = (city:Favorite) => {
    callbackEditeFavorites(city, 'add');
  };
  const cities = results.map((city:Favorite) => (
    <div className="result-city-main">
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
      </div>
      {city.fav === true
        ? <AiFillStar className="results-city-ico" onClick={() => { deleteFavorite(city); }} />
        : <AiOutlineStar className="results-city-ico" onClick={() => { addFavorite(city); }} />}

    </div>

  ));

  return (
    <div className="results-city">
      {cities}
    </div>
  );
};

export default ResultsCity;
