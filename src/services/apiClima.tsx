// Services/apiClima.tsx
import { useWeatherContext } from '../components/Context/WeatherContext'; // Asegúrate de importar useWeatherContext desde la ubicación correcta
import { formatDataTempResApi, formatDataResCity } from '../utils/utils';
import { City } from '../models/City';
import { Temp } from '../models/Temp';

const API = 'https://api.openweathermap.org/data/2.5';
const APIKEY = '9d03f75cd013afb4dacea81fe4cd97ca';

const formatQuery = (type: string, id?: number, lat?: number, lon?: number) => {
  if (lat) {
    return `${API}/${type}?lat=${lat}&lon=${lon}&appid=${APIKEY}&cnt=5&units=metric`;
  }
  return `${API}/${type}?id=${id}&appid=${APIKEY}&cnt=5&units=metric`;
};

export const getClimaById = async (id: number) => {
  const res = await fetch(formatQuery('weather', id));
  const data = await res.json();
  const dataCity: City = formatDataResCity(data, false);
  if (dataCity) {
    const res2 = await fetch(formatQuery('forecast', id));
    const data2 = await res2.json();
    const temps: Temp[] = formatDataTempResApi(data2.list);
    dataCity.temps = temps;

    const { updateWeatherData } = useWeatherContext(); // Importante: asegúrate de tener importado useWeatherContext aquí
    updateWeatherData(dataCity);
  }
};

export const getClimaByGelocation = async (lat: number, lon: number) => {
  const res = await fetch(formatQuery('weather', 0, lat, lon));
  const data = await res.json();
  const dataCity: City = formatDataResCity(data, false);
  if (dataCity) {
    const res2 = await fetch(formatQuery('forecast', 0, lat, lon));
    const data2 = await res2.json();
    const temps: Temp[] = formatDataTempResApi(data2.list);
    dataCity.temps = temps;
  }
  return dataCity;
};
