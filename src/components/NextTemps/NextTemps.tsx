/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { City } from '../../models/City';
import './NextTemps.css';

interface Props {
  current: City
}
const NextTemps: React.FC<Props> = ({ current }: Props) => {
  const { temps } = current;
  const data = temps.map((temp) => (
    <div className="next-temps-days">
      <div className="next-temps-days-title">dia x</div>
      <div className="next-temps-days-max">{temp.max_temp}</div>
      <div className="next-temps-days-min">{temp.min_temp}</div>
      <div className="next-temps-days-title">{temp.humidity}</div>
      <div className="next-temps-days-max">{temp.feels_like}</div>
      <div className="next-temps-days-min">{temp.pressure}</div>
    </div>
  ));
  return (
    <div className="next-temps-main">
      <div className="next-temps-days">
        <div className="next-temps-days-title"> </div>
        <div className="next-temps-days-max">Max</div>
        <div className="next-temps-days-min">Min</div>
        <div className="next-temps-days-title">Humidity</div>
        <div className="next-temps-days-max">Feel Like</div>
        <div className="next-temps-days-min">Preasure</div>
      </div>
      {data}
    </div>
  );
};

export default NextTemps;
