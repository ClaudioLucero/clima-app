import React, { useState } from 'react';
import './ResultsCity.css';
import { AiOutlineStar } from 'react-icons/ai';
import { City } from '../../models/City';

interface Props {
  fav:City[]
}
const ResultsCity : React.FC<Props> = ({ fav }:Props) => {
  const [myCities, setMyCities] = useState<Array<City>>(fav);
  const cities = myCities.map((city) => (
    <div className="results-city-res" key={city.id}>
      <p className="results-city-name">
        {city.name}
      </p>
      <AiOutlineStar className="results-city-ico" />
    </div>

  ));

  return (
    <div className="results-city">
      {cities}
    </div>
  );
};

export default ResultsCity;
