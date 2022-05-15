/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import SearchCities from '../SearchCities/SearchCities';
import Favorites from '../Favorites/Favorites';
import CityData from '../CityData/CityData';
import NextTemps from '../NextTemps/NextTemps';
import { getClimaByGelocation } from '../../services/apliClima';
import { City } from '../../models/City';

const INT_STATE: City[] = [
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

interface Props {
  lon:number,
  lat:number
}

interface AppState {
  currentCity: City,
  favorites: City[]
}

const BodyClima: React.FC<Props> = ({ lon, lat }: Props) => {
  const [currentCity, setCurrentCity] = useState<AppState['currentCity']>();
  const [favorites, setFavorites] = useState<AppState['favorites']>([]);

  useEffect(() => {
    getClimaByGelocation(lat, lon).then((data:City) => {
      if (data) {
        setCurrentCity(data);
        setFavorites(INT_STATE);
      }
    });
  }, []);

  const updateCurrentCity = (city: City) => {
    setCurrentCity(city);
  };
  return (
    <div className="">
      <Favorites fav={favorites} callbackCurrentCity={updateCurrentCity} />
      <SearchCities fav={favorites} callbackSetCurrentCity={updateCurrentCity} />
      {currentCity
        ? (
          <>
            <CityData current={currentCity} />
            <NextTemps current={currentCity} />
          </>
        )
        : null}
    </div>
  );
};

export default BodyClima;
