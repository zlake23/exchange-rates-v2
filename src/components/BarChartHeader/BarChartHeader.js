import React from 'react';
import './BarChartHeader.css';

function BarChartHeader(props) {
  
  return (
    <div className="Graph-select">
    <div>
      <span>Select Continental Region:</span>
      <select onChange={event => setSelectedRegionTitle(event.target.value)}>
          
          <option>Europe</option>
          <option>Asia</option>
          <option>North America</option>
          <option>South America</option>
          <option>Africa/Oceania</option>
      </select>
      </div>
      <div>
      <span>Select base currency:</span>
      <select onChange={event => setSelectedBase(event.target.value)}>
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
