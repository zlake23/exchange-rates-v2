import React from 'react';
import './BarChartHeader.css';

function BarChartHeader(props) {
  
  const regions = [
    'Europe', 'Asia', 'North America', 'South America', 'Africa/Oceania',
  ];
  const baseCurrencies = [
    'EUR', 'USD', 'CAD', 'GBP', 'AUD',
  ];

  return (
    <div className={props.className}>
    <div>
      <span>{props.regionSelect}</span>
      <select onChange={props.onChangeRegion}>
          {
            regions.map(region => (
              <option>{region}</option>
            ))
          }
      </select>
      </div>
      <div>
      <span>{props.baseSelect}</span>
      <select onChange={props.onChangeBase}>
          {
            baseCurrencies.map(base => (
              <option>{base}</option>
            ))
          }
      </select>
      </div>
  </div>
  );
}

export default BarChartHeader;
