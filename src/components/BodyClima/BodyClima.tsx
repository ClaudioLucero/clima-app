/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import SearchCities from '../SearchCities/SearchCities';
import Favorites from '../Favorites/Favorites';
import CityData from '../CityData/CityData';
import NextTemps from '../NextTemps/NextTemps';
import { useWeatherContext } from '../Context/WeatherContext'; // Importa el contexto
import { getClimaByGelocation, getClimaById } from '../../services/apiClima';
import { City } from '../../models/City';
import { Favorite } from '../../models/Favorite';
import { getFavorites } from '../../utils/utils';
import './BodyClima.css';

interface Props {
  msg: string | null
  lon: number
  lat: number
}

interface AppState {
  favorites: Favorite[]
  cityData: City
}

const BodyClima: React.FC<Props> = ({ lon, lat, msg }: Props) => {
  const { weatherData, updateWeatherData } = useWeatherContext(); // Utiliza el contexto
  const [favorites, setFavorites] = useState<AppState['favorites']>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Cuando weatherData cambie en el contexto, actualiza el estado local
    if (weatherData) {
      setLoading(true);
    }
  }, [weatherData]);

  useEffect(() => {
    if (lat && lon) {
      setLoading(false);
      getClimaByGelocation(lat, lon).then((data: City) => {
        if (data) {
          updateWeatherData(data); // Actualiza los datos en el contexto
          setLoading(true);
        }
      });
    }
  }, [lat, lon]);

  // funcion que se pasa al componente SearchCity para
  // eliminar favorito desde resultados de busqueda
  const deleteFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };
  // funcion que se pasa al componente SearchCity para
  // agregar favorito desde resultados de busqueda
  const addFavorite = (city: Favorite) => {
    // solo permito guardar 5 favoritos
    if (favorites.length < 5) {
      setFavorites((prev: Favorite[]) => [...prev, city]);
    }
  };
  const updateCurrentCity = (id: number) => {
    setLoading(false);
    getClimaById(id)
      .then((data: any) => {
        if (data) {
          updateWeatherData(data); // Actualiza los datos en el contexto
        }
      })
      .finally(() => {
        setLoading(true);
      });
  };
  useEffect(() => {
    // cargo favoritos guardados por defecto
    const myFavorites = getFavorites();
    setLoading(false);
    // cargo datos de ciudad detectada por geolocalizacion del browser
    getClimaByGelocation(lat, lon).then((data: City) => {
      if (data) {
        setFavorites(myFavorites);
        setLoading(true);
      }
    });
  }, []);
  return (
    <div className="body-clima-main">
      <Favorites
        myFavorites={favorites}
        callBackCurrentCity={updateCurrentCity}
        callBackDeleteFavorite={deleteFavorite}
      />
      {msg !== null ? <div>{msg}</div>
        : null}
      <SearchCities
        myFavorites={favorites}
        callBackSetCurrentCity={updateCurrentCity}
        callBackDeleteFavorite={deleteFavorite}
        callBackAddFavorite={addFavorite}
      />
      {loading && weatherData
        ? (
          <>
            <CityData current={weatherData} />
            <NextTemps current={weatherData} />
          </>
        )
        : <div className="loader" />}
    </div>
  );
};

export default BodyClima;
