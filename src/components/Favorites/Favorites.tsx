/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import './Favorites.css';
import { City } from '../../models/City';

interface Props {
  fav: City[],
  callbackCurrentCity:Function
}
interface AppState {
  myFavorites: City[]
}
const Favorites: React.FC<Props> = ({ fav, callbackCurrentCity }: Props) => {
  const [favs, setFavs] = useState<AppState['myFavorites']>([]);
  useEffect(() => {
    setFavs(fav);
  }, [fav]);

  const deleteFavorite = (city:string) => {
    setFavs(favs.filter((item) => item.name !== city));
  };
  const selectFavorite = (city:City) => {
    callbackCurrentCity(city);
  };
  const cities = favs.map((city) => (
    <div className="favourites-city" key={city.id}>
      <div
        className="favourites-city-name"
        role="button"
        title={city.name}
        tabIndex={0}
        onClick={() => { selectFavorite(city); }}
        onKeyDown={() => { selectFavorite(city); }}
      >
        {city.name}
      </div>
      <div
        className="favourites-city-icon"
        role="button"
        tabIndex={0}
        title={city.name}
        onClick={() => { deleteFavorite(city.name); }}
        onKeyDown={() => { deleteFavorite(city.name); }}
      >
        X
      </div>
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
