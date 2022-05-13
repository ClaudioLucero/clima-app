/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// chequear
import { City } from '../models/City';
import province from '../provinces-arg.json';

const formatDataRes = (res:any) => {
  const city:City = {
    name: res.name,
    id: res.id,
    temps: [],
  };
  return city;
};

export const searchProvince = (value: string) => {
  const res:City[] = [];
  province.map((item) => {
    const prov = item.name.toLocaleUpperCase();
    if (prov.match(value)) {
      res.push(formatDataRes(item));
    }
  });
  return res;
};
