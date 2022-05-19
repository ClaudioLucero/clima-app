/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
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
interface AppState {
  results:Favorite[]
}

const SearchCities: React.FC<Props> = ({
  myFavorites, callBackSetCurrentCity, callBackDeleteFavorite, callBackAddFavorite,
}: Props) => {
  const [valueSearch, setValueSearch] = useState('');
  const [results, setResults] = useState<AppState['results']>([]);
  // llamo al callback de seleccion de ciudad actual para
  // ver datos de la ciudad seleccionada desde el buscador
  const changeValueInput = (city:City) => {
    setValueSearch(city.name);
    callBackSetCurrentCity(city.id);
    setResults([]);
  };
  // ejecuto cuando el evento onclic de ResultCity se acciona al clickear en el icon de favorito
  const editeFavorites = (city:Favorite, type: string) => {
    if (type === 'add') {
      callBackAddFavorite(city);
    } else {
      callBackDeleteFavorite(city.id);
    }
  };
  // cada vez que typeo en el buscador ejecuto
  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(evt.target.value);
    const { value } = evt.target;
    // comienzo a realizar busquedas despues de typear 3 caracteres
    if (value.length > 2) {
      // busca dentro de provinces-arg.json que tiene latiudes y longitudes de prvincias.
      // datos de provincias obtenidos desde archivo descargable de https://openweathermap.org/api
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
