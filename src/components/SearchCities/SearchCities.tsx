/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Fragment, useState } from 'react';
import { City } from '../../models/City';
import ResultsCity from '../ResultsCity/ResultsCity';
import { searchProvice } from '../../services/searchProvices.js';
import './SearchCities.css';

interface Props {
  fav: City[]
}

const SearchCities: React.FC<Props> = ({ fav }: Props) => {
  const [myCities, setMyCities] = useState<Array<City>>([]);
  const [valueSearch, setValueSearch] = useState('');
  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // setMyCities(fav);
    setValueSearch(evt.target.value);
    const { value } = evt.target;
    if (value.length > 2) {
      searchProvice(value.toLocaleUpperCase());
    }
  };

  return (
    <div className="search-cities">
      <input className="search-cities-input" onChange={handleInput} value={valueSearch} />
      {myCities.length > 0 && (
        <div />
      )}
    </div>
  );
};

export default SearchCities;
