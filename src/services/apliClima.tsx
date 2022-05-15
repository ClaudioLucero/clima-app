/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// chequear
import { City } from '../models/City';

export const getClimaById = async (id:number) => {
  const res = fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=9d03f75cd013afb4dacea81fe4cd97ca&units=metric`);
  const data = await (await res).json();
  const resCity: City = {
    name: data.name,
    id: data.id,
    fav: false,
    temps: [
      {
        day: 'string',
        max: data.main.temp_max,
        min: data.main.temp_min,
      },
    ],
  };
  return resCity;
};
export const getClimaByGelocation = async (lat:number, lon:number) => {
  const res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d03f75cd013afb4dacea81fe4cd97ca&units=metric`);
  const data = await (await res).json();
  const resCity: City = {
    name: data.name,
    id: data.id,
    fav: false,
    temps: [
      {
        day: 'string',
        max: data.main.temp_max,
        min: data.main.temp_min,
      },
    ],
  };
  return resCity;
};
