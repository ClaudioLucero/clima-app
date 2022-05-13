import React, { useEffect, useState } from 'react';
import './Favorites.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { City } from '../../models/City';

interface Props {
  fav:City[]
}
interface AppState {
  myFavorites:City[]
}
const Favorites:React.FC<Props> = ({ fav }:Props) => {
  const [favs, setFavs] = useState<AppState['myFavorites']>([]);
  useEffect(() => {
    setFavs(fav);
  }, [fav]);
  // eslint-disable-next-line no-trailing-spaces

  const cities = favs.map((city) => (
    <div className="favourites-city" key={city.id}>
      {city.name}
      <TiDeleteOutline />
    </div>
  ));

  return (
    <div className="favorites">
      {favs.length > 0
        ? cities
        : null}
    </div>
  );
};

export default Favorites;
