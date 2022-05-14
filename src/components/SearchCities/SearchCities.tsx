/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import ResultsCity from '../ResultsCity/ResultsCity';
import { searchProvince } from '../../services/searchProvinces';
import { City } from '../../models/City';
import './SearchCities.css';

interface Props {
  fav: City[]
}
const SearchCities: React.FC<Props> = ({ fav }: Props) => {
  const [valueSearch, setValueSearch] = useState('');
  const [results, setResults] = useState<City[]>([]);

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(evt.target.value);
    const { value } = evt.target;
    if (value.length > 2) {
      const res:City[] = searchProvince(value.toLocaleUpperCase(), fav);
      setResults(res);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-cities">
      <input className="search-cities-input" onChange={handleInput} value={valueSearch} />
      {results.length > 0
        ? <ResultsCity results={results} />
        : null}
    </div>
  );
};

export default SearchCities;
