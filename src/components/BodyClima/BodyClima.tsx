/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import SearchCities from '../SearchCities/SearchCities';
import Favorites from '../Favorites/Favorites';
import CityData from '../CityData/CityData';
import NextTemps from '../NextTemps/NextTemps';
import { getClimaByGelocation, getClimaById } from '../../services/apliClima';
import { City } from '../../models/City';
import { Favorite } from '../../models/Favorite';
import { getFavorites } from '../../utils/utils';
import './BodyClima.css';

interface Props {
  lon: number,
  lat: number
}

interface AppState {
  currentCityId: number
  favorites: Favorite[]
  cityData: City
}

const BodyClima: React.FC<Props> = ({ lon, lat }: Props) => {
  const [currentCityId, setCurrentCityId] = useState<AppState['currentCityId']>();
  const [cityData, setCityData] = useState<AppState['cityData']>();
  const [favorites, setFavorites] = useState<AppState['favorites']>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const deleteFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };
  const addFavorite = (city:Favorite) => {
    if (favorites.length < 5) {
      setFavorites((prev: Favorite[]) => [...prev, city]);
    }
  };

  const updateCurrentCity = (id: number) => {
    setLoading(false);
    getClimaById(id).then((data: City) => {
      if (data) {
        setCurrentCityId(data.id);
        setCityData(data);

        setLoading(true);
      }
    });
  };
  useEffect(() => {
    const myFavorites = getFavorites();
    setLoading(false);
    getClimaByGelocation(lat, lon).then((data: City) => {
      if (data) {
        setCityData(data);
        setCurrentCityId(data.id);
        setFavorites(myFavorites);
        setLoading(true);
      }
    });
  }, []);

  useEffect(() => {
    if (cityData) {
      setCurrentCityId(cityData.id);
    }
  }, [cityData]);

  return (
    <div className="body-clima-main">
      <Favorites
        myFavorites={favorites}
        callBackCurrentCity={updateCurrentCity}
        callBackDeleteFavorite={deleteFavorite}
      />
      <SearchCities
        myFavorites={favorites}
        callBackSetCurrentCity={updateCurrentCity}
        callBackDeleteFavorite={deleteFavorite}
        callBackAddFavorite={addFavorite}
      />
      {loading && cityData
        ? (
          <>
            <CityData current={cityData} />
            <NextTemps current={cityData} />
          </>
        )
        : <div className="loader" />}
    </div>
  );
};

export default BodyClima;
