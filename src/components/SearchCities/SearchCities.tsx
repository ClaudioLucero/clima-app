/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Fragment, useState } from 'react';
import { City } from '../../models/City';
import ResultsCity from '../ResultsCity/ResultsCity';
import './SearchCities.css';

interface Props {
  fav:City[]
}

const SearchCities : React.FC<Props> = ({ fav }:Props) => {
  const [myCities, setMyCities] = useState<Array<City>>([]);
  const handleInput = (_evt: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setMyCities(fav);
  };

  return (
    <div className="search-cities">
      <input className="search-cities-input" onClick={(_evt) => { handleInput(_evt); }} />
      {myCities.length > 0 && (
        <div />
      )}
    </div>
  );
};

export default SearchCities;
