/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import './Favorites.css';
import { Favorite } from '../../models/Favorite';

interface Props {
  myFavorites: Favorite[],
  callBackCurrentCity: Function
  callBackDeleteFavorite: Function
}

const Favorites: React.FC<Props> = ({
  myFavorites,
  callBackCurrentCity,
  callBackDeleteFavorite,
}: Props) => {
  const deleteFavorite = (id: number) => {
    callBackDeleteFavorite(id);
  };

  const selectFavorite = (id: number) => {
    callBackCurrentCity(id);
  };

  const cities = myFavorites.map((city) => (
    <div className="favourites-city" key={city.id}>
      <div
        className="favourites-city-name"
        role="button"
        title={city.name}
        tabIndex={0}
        onClick={() => { selectFavorite(city.id); }}
        onKeyDown={() => { selectFavorite(city.id); }}
      >
        {city.name}
      </div>
      <div
        className="favourites-city-icon"
        role="button"
        tabIndex={0}
        title={city.name}
        onClick={() => { deleteFavorite(city.id); }}
        onKeyDown={() => { deleteFavorite(city.id); }}
      >
        X
      </div>
    </div>
  ));
  return (
    <div className="favorites">
      {myFavorites.length > 0
        ? cities
        : null}
    </div>
  );
};

export default Favorites;
