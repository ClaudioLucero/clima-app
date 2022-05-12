/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Fragment, useState } from 'react';
import SearchCities from '../SearchCities/SearchCities';
import Favorites from '../Favorites/Favorites';
import CityData from '../CityData/CityData';
import NextTemps from '../NextTemps/NextTemps';
import { City } from '../../models/City';

const INT_STATE:City[] = [
  { name: 'San Luis', id: 1 },
  { name: 'Cordoba', id: 2 },
  { name: 'Buenos Aires', id: 3 },
  { name: 'Mendoza', id: 4 },
  { name: 'Salta', id: 5 },
];

interface AppState {
    currentCity:City
}

const BodyClima : React.FC = () => {
  const [city, setCity] = useState(INT_STATE[0]);
  return (
    <div className="">
      <Favorites />
      <SearchCities />
      <CityData city={city} />
      <NextTemps />
    </div>
  );
};

export default BodyClima;
