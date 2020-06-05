import React from 'react';
import './GraphText.css';

function GraphText(props) {

  return (
    <div className={props.className}>
    {
      props.ratesData
      .sort()
      .filter(rate => props.selectedRegion[props.selectedRegionTitle].includes(rate[0]))
      .map(rate => (
      <div className={props.className} key={rate[0]}>
        {rate[0]}, {rate[1]}
      </div>
      ))
    }
  </div>
  );
}

export default GraphText;
