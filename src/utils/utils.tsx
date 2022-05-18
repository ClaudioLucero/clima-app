/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// chequear
import { City } from '../models/City';
import { Temp } from '../models/Temp';
import { Favorite } from '../models/Favorite';
import province from '../provinces-arg.json';

export const getToday = () => {
  const today = new Date().toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric' });
  return today;
};
export const getNextdays = ():string[] => {
  const week = [];
  for (let index = 1; index < 6; index++) {
    const tomorrow = new Date();
    week[index] = `${tomorrow.getDate() + index}-${tomorrow.getMonth() + index}-${tomorrow.getFullYear()}`;
  }
  return week;
};

const setFavorite = (idCity:number, favorites:Favorite[]) => { // corregir
  let res = false;
  favorites.map((item) => {
    if (idCity === item.id) {
      res = true;
    }
  });
  return res;
};

const formatDataSearch = (res:any, favorites:Favorite[]) => {
  const isFav = setFavorite(res.id, favorites);
  const results:Favorite = {
    name: res.name,
    id: res.id,
    fav: isFav,
  };
  return results;
};

export const searchProvince = (value: string, favorites:Favorite[]) => {
  const res:Favorite[] = [];
  province.map((item) => {
    const prov = item.name.toLocaleUpperCase();
    if (prov.match(value)) {
      res.push(formatDataSearch(item, favorites));
    }
  });
  return res;
};

export const formatDataTempResApi = (res:any) => {
  const temps :Temp[] = [];
  res.map((tmp:any) => {
    temps.push({
      max_temp: tmp.main.temp_max,
      min_temp: tmp.main.temp_min,
      humidity: tmp.main.humidity,
      feels_like: tmp.main.feels_like,
      grnd_level: tmp.main.grnd_level,
      pressure: tmp.main.pressure,
      sea_level: tmp.main.sea_level,
      icon: tmp.weather[0].icon,
      description: tmp.weather[0].description,

    });
  });
  return temps;
};

export const formatDataResCity = (res:any, favorite:boolean) => {
  const resCity: City = {
    name: res.name,
    id: res.id,
    fav: favorite,
    todayTemp:
      {
        max_temp: res.main.temp_max,
        min_temp: res.main.temp_min,
        humidity: res.main.humidity,
        feels_like: res.main.feels_like,
        grnd_level: res.main.grnd_level,
        pressure: res.main.pressure,
        sea_level: res.main.sea_level,
        icon: res.weather[0].icon,
        description: res.weather[0].description,
      },
    temps: [],
  };
  return resCity;
};
export const getFavorites = ():Favorite[] => {
  const INT_FAVORITES:Favorite[] = [
    {
      name: 'San Luis',
      id: 3837029,
      fav: true,
    },
    {
      name: 'Cordoba',
      id: 3860255,
      fav: true,
    },
    {
      name: 'Mendoza',
      id: 3844419,
      fav: true,
    },
    {
      name: 'Buenos Aires',
      id: 3433955,
      fav: true,
    },
  ];
  return INT_FAVORITES;
};
