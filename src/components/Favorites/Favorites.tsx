import React, { useState } from 'react';
import './Favorites.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { City } from '../../models/City';

const INT_STATE:City[] = [
  { name: 'San Luis', id: 1 },
  { name: 'Cordoba', id: 2 },
  { name: 'Buenos Aires', id: 3 },
  { name: 'Mendoza', id: 4 },
  { name: 'Salta', id: 5 },
];

const Favorites : React.FC = () => {
  const [myCities, setMyCities] = useState<Array<City>>(INT_STATE);
  const cities = myCities.map((city) => (
    <div className="favourites-city" key={city.id}>
      {city.name}
      <TiDeleteOutline />
    </div>
  ));

  return (
    <div className="favorites">
      {cities}
    </div>
  );
};

export default Favorites;
