import React from 'react';
import './GraphContent.css';

function GraphContent(props) {


  return (
    <div className="Graph-content">
                  {
                    rates
                    .filter(rate => selectedRegion[selectedRegionTitle].includes(rate[0]))
                    .map(rate => (
                    <div className="Graph-bar" key={rate[0]} style={{width: (1/rate[1] * 100) + '%'}}></div>  
                    ))
                  }
                </div>
  );
}

export default GraphContent;
