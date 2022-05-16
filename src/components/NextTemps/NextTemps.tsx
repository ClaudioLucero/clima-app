/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { City } from '../../models/City';
import './NextTemps.css';

interface Props {
  current:City
}
const NextTemps:React.FC<Props> = ({ current }:Props) => {
  const { temps } = current;
  const data = temps.map((temp) => (
    <div className="next-temps-days">
      <div className="next-temps-days-title">{323}</div>
      <div className="next-temps-days-max">{434}</div>
      <div className="next-temps-days-min">{3434}</div>
    </div>
  ));
  return (
    <div className="next-temps-main">
      {data}
    </div>
  );
};

export default NextTemps;
