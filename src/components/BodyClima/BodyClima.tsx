/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import SearchCities from '../SearchCities/SearchCities';
import Favorites from '../Favorites/Favorites';
import CityData from '../CityData/CityData';
import NextTemps from '../NextTemps/NextTemps';
import { City } from '../../models/City';

const CURRENT:City = {
  name: 'San Luis',
  id: 3837029,
  fav: false,
  temps: [
    {
      day: 'day1',
      min: '22º',
      max: '30º',
    },
    {
      day: 'day2',
      min: '22º',
      max: '30º',
    },
  ],
};
const INT_STATE:City[] = [
  {
    name: 'San Luis',
    id: 3837029,
    fav: true,
    temps: [
      {
        day: 'day1',
        min: '22º',
        max: '30º',
      },
      {
        day: 'day2',
        min: '22º',
        max: '30º',
      },
    ],
  },
  {
    name: 'Cordoba',
    id: 3860255,
    fav: true,
    temps: [
      {
        day: 'day1',
        min: '22º',
        max: '30º',
      },
      {
        day: 'day2',
        min: '22º',
        max: '30º',
      },
    ],
  },
  {
    name: 'Mendoza',
    id: 3844419,
    fav: true,
    temps: [
      {
        day: 'day1',
        min: '22º',
        max: '30º',
      },
      {
        day: 'day2',
        min: '22º',
        max: '30º',
      },
    ],
  },
  {
    name: 'Buenos Aires',
    id: 3433955,
    fav: true,
    temps: [
      {
        day: 'day1',
        min: '22º',
        max: '30º',
      },
      {
        day: 'day2',
        min: '55º',
        max: '10º',
      },
    ],
  },

];

interface AppState {
    currentCity:City,
    favorites:City[]
}

const BodyClima : React.FC = () => {
  const [currentCity, setCurrentCity] = useState<AppState['currentCity']>(CURRENT);
  const [favorites, setFavorites] = useState<AppState['favorites']>([]);

  useEffect(() => {
    setCurrentCity(CURRENT);
    setFavorites(INT_STATE);
  }, []);

  useEffect(() => {
    console.log(currentCity);// chequear
  }, [currentCity]);

  const updateCurrentCity = (city:City) => {
    setCurrentCity(city);
  };
  return (
    <div className="">
      <Favorites fav={favorites} callbackCurrentCity={updateCurrentCity} />
      <SearchCities fav={favorites} />
      <CityData current={currentCity} />
      <NextTemps current={currentCity} />
    </div>
  );
};

export default BodyClima;
