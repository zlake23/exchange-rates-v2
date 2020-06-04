import React from 'react';
import './BarChartHeader.css';

function BarChartHeader(props) {
  
  return (
    <div className={props.className}>
    <div>
      <span>{props.regionSelect}</span>
      <select onChange={props.onChangeRegion}>
          
          <option>Europe</option>
          <option>Asia</option>
          <option>North America</option>
          <option>South America</option>
          <option>Africa/Oceania</option>
      </select>
      </div>
      <div>
      <span>{props.baseSelect}</span>
      <select onChange={props.onChangeBase}>
          <option>EUR</option>
          <option>USD</option>
          <option>CAD</option>
          <option>GBP</option>
          <option>AUD</option>
      </select>
      </div>
  </div>
  );
}

export default BarChartHeader;
