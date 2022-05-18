/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import ResultsCity from '../ResultsCity/ResultsCity';
import { searchProvince } from '../../utils/utils';
import { City } from '../../models/City';
import { Favorite } from '../../models/Favorite';
import './SearchCities.css';

interface Props {
  myFavorites: Favorite[],
  callBackSetCurrentCity:Function
  callBackDeleteFavorite:Function
  callBackAddFavorite:Function
}
const SearchCities: React.FC<Props> = ({
  myFavorites, callBackSetCurrentCity, callBackDeleteFavorite, callBackAddFavorite,
}: Props) => {
  const [valueSearch, setValueSearch] = useState('');
  const [results, setResults] = useState<Favorite[]>([]);

  const changeValueInput = (city:City) => {
    setValueSearch(city.name);
    callBackSetCurrentCity(city.id);
    setResults([]);
  };
  const editeFavorites = (city:Favorite, type: string) => {
    if (type === 'add') {
      callBackAddFavorite(city);
    } else {
      callBackDeleteFavorite(city.id);
    }
  };

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(evt.target.value);
    const { value } = evt.target;
    if (value.length > 2) {
      const res:Favorite[] = searchProvince(value.toLocaleUpperCase(), myFavorites);
      setResults(res);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-cities">
      <input className="search-cities-input" onChange={handleInput} value={valueSearch} placeholder="Search provinces of Argentina" />
      {results.length > 0
        ? (
          <ResultsCity
            results={results}
            callbackValueSearch={changeValueInput}
            callbackEditeFavorites={editeFavorites}
          />
        )
        : null}
    </div>
  );
};

export default SearchCities;
