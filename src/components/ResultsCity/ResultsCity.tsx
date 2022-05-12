import React, { useState } from 'react';
import './ResultsCity.css';
import { AiOutlineStar } from 'react-icons/ai';
import { City } from '../../models/City';

const INT_STATE:City[] = [
  { name: 'San Luis', id: 1 },
  { name: 'Cordoba', id: 2 },
  { name: 'Buenos Aires', id: 3 },
  { name: 'Mendoza', id: 4 },
  { name: 'Salta', id: 5 },
];

const ResultsCity : React.FC = () => {
  const [myCities, setMyCities] = useState<Array<City>>(INT_STATE);
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
