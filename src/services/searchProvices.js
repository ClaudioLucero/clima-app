/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// chequear
import province from '../provinces-arg.json';

export const searchProvice = (value) => {
  const res = [];
  province.map((item) => {
    const prov = item.name.toLocaleUpperCase();
    if (prov.match(value)) {
      res.push(prov);
    }
  });
  return res;
};
