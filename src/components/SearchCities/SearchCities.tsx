/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Fragment, useState } from 'react';
import { City } from '../../models/City';
import ResultsCity from '../ResultsCity/ResultsCity';
import './SearchCities.css';

const INT_STATE:City[] = [
  { name: 'San Luis', id: 1 },
  { name: 'Cordoba', id: 2 },
  { name: 'Buenos Aires', id: 3 },
  { name: 'Mendoza', id: 4 },
  { name: 'Salta', id: 5 },
];

const SearchCities : React.FC = () => {
  const [myCities, setMyCities] = useState<Array<City>>([]);
  const handleInput = (_evt: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setMyCities(INT_STATE);
  };

  return (
    <div className="search-cities">
      <input className="search-cities-input" onClick={(_evt) => { handleInput(_evt); }} />
      {myCities.length > 0 && (
      <ResultsCity />
      )}
    </div>
  );
};

export default SearchCities;
