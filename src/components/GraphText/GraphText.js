import React from 'react';
import './GraphText.css';

function GraphText(props) {

  return (
    <div className="Graph-text">
    {
      rates
      .sort()
      .filter(rate => selectedRegion[selectedRegionTitle].includes(rate[0]))
      .map(rate => (
      <div className="Graph-text" key={rate[0]}>
        {rate[0]}, {rate[1]}
      </div>
      ))
    }
  </div>
  );
}

export default GraphText;
