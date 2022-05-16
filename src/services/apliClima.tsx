/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// chequear
import { formatDataTempResApi, formatDataResCity } from '../utils/utils';
import { City } from '../models/City';
import { Temp } from '../models/Temp';

export const getClimaById = async (id:number) => {
  const res = fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=9d03f75cd013afb4dacea81fe4cd97ca&units=metric`);
  const data = await (await res).json();
  const dataCity:City = formatDataResCity(data, false);
  if (dataCity) {
    const res2 = fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&cnt=5&appid=9d03f75cd013afb4dacea81fe4cd97ca&units=metric`);
    const data2 = await (await res2).json();
    const temps:Temp[] = formatDataTempResApi(data2.list);
    dataCity.temps = temps;
  }
  return dataCity;
};
export const getClimaByGelocation = async (lat:number, lon:number) => {
  const res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d03f75cd013afb4dacea81fe4cd97ca&units=metric`);
  const data = await (await res).json();
  const dataCity:City = formatDataResCity(data, false);
  if (dataCity) {
    const res2 = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=9d03f75cd013afb4dacea81fe4cd97ca&units=metric`);
    const data2 = await (await res2).json();
    const temps:Temp[] = formatDataTempResApi(data2.list);
    dataCity.temps = temps;
  }
  return dataCity;
};

// export const getPronosticoClimaById = async (id:number) => {
//   const res = fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=9d03f75cd013afb4dacea81fe4cd97ca&units=metric`);
//   const data = await (await res).json();
//   const resCity: City = {
//     name: data.name,
//     id: data.id,
//     fav: false,
//     temps: [
//       {
//         day: 'string',
//         max: data.main.temp_max,
//         min: data.main.temp_min,
//       },
//     ],
//   };
//   return resCity;
// };
// export const getPronosticoByGelocation = async (lat:number, lon:number) => {
//   const res = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=9d03f75cd013afb4dacea81fe4cd97ca&units=metric`);
//   const data = await (await res).json();
//   const resCity: City = {
//     name: data.name,
//     id: data.id,
//     fav: false,
//     temps: [
//       {
//         day: 'string',
//         max: data.main.temp_max,
//         min: data.main.temp_min,
//       },
//     ],
//   };
//   return resCity;
// };
