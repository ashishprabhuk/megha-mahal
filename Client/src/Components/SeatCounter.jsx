import React from 'react';
import CountUp from 'react-countup';
import { LuArmchair } from "react-icons/lu";
import './SeatCounter.css';

const SeatCounter = ({ capacity, area }) => {
  const boxClass = capacity === 50 ? "seat-counter-box dining-area" : "seat-counter-box";

  return (
    <div className="seat-counter-container">
      <div className={boxClass}>
        <h3 className='c-head'>{area}</h3>
        <CountUp end={capacity} duration={2} className="countup" suffix="+" />
        <p className='btmSeat'><LuArmchair/> Seats</p>
      </div>
    </div>
  );
}

export default SeatCounter;
