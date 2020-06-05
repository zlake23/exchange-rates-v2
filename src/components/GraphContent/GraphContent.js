import React from 'react';
import './GraphContent.css';

function GraphContent(props) {


  return (
    <div className={props.outerDivClassName}>
                  {
                    props.ratesData
                    .filter(rate => props.selectedRegion[props.selectedRegionTitle].includes(rate[0]))
                    .map(rate => (
                    <div className={props.innerDivClassName} key={rate[0]} style={{width: (1/rate[1] * 100) + '%'}}></div>  
                    ))
                  }
                </div>
  );
}

export default GraphContent;
