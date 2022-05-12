/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { City } from '../../models/City';
import './NextTemps.css';

interface cityTemps{
    day:string,
    min:string,
    max:string
}
const INT_STATE:cityTemps[] = [
  { day: '2', max: '23º', min: '29º' },
  { day: '3', max: '23º', min: '29º' },
  { day: '4', max: '23º', min: '29º' },
  { day: '5', max: '23º', min: '29º' },
  { day: '6', max: '23º', min: '29º' },
];
const NextTemps:React.FC = () => {
  const temps = INT_STATE.map((temp) => (
    <div className="next-temps-days">
      {temp.day}
    </div>
  ));
  return (
    <div className="next-temps-main">
      {temps}
    </div>
  );
};

export default NextTemps;
