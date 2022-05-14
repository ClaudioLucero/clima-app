/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// chequear
import { City } from '../models/City';
import province from '../provinces-arg.json';

const setFavorite = (idCity:number, favorites:City[]) => { // corregir
  let res = false;
  favorites.map((item) => {
    if (idCity === item.id) {
      res = true;
    }
  });
  return res;
};

const formatDataRes = (res:any, favorites:City[]) => {
  const isFav = setFavorite(res.id, favorites);
  const city:City = {
    name: res.name,
    id: res.id,
    fav: isFav,
    temps: [],
  };
  return city;
};

export const searchProvince = (value: string, favorites:City[]) => {
  const res:City[] = [];
  province.map((item) => {
    const prov = item.name.toLocaleUpperCase();
    if (prov.match(value)) {
      res.push(formatDataRes(item, favorites));
    }
  });
  return res;
};
