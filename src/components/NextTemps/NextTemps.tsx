/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { City } from '../../models/City';
import { getNextdays } from '../../utils/utils';
import './NextTemps.css';

interface Props {
  current: City
}
const NextTemps: React.FC<Props> = ({ current }: Props) => {
  const week:string[] = getNextdays();
  const { temps } = current;
  const data = temps.map((temp, index) => (
    <div className="next-temps-days">
      <div className="next-temps-days-col">
        <img className="next-temps-days-icon" src={`http://openweathermap.org/img/wn/${temp.icon}.png`} />
      </div>
      <div className="next-temps-days-col">{week[index + 1]}</div>
      <div className="next-temps-days-col">{temp.max_temp}°C</div>
      <div className="next-temps-days-col">{temp.min_temp}°C</div>
      <div className="next-temps-days-col">{temp.humidity}%</div>
      <div className="next-temps-days-col">{temp.feels_like}°C</div>
    </div>
  ));
  return (
    <div className="next-temps-main">
      <div className="next-temps-days top">
        <div className="next-temps-days-col" />
        <div className="next-temps-days-col">Date</div>
        <div className="next-temps-days-col">Max</div>
        <div className="next-temps-days-col">Min</div>
        <div className="next-temps-days-col">Humidity</div>
        <div className="next-temps-days-col">Feel Like</div>
      </div>
      {data}
    </div>
  );
};

export default NextTemps;
