import React, {useState, useEffect} from 'react';
import './App.css';

import MainHeader from './components/MainHeader/MainHeader.js';
import BarChartHeader from './components/BarChartHeader/BarChartHeader.js';

function App() {
  const [selectedRegionTitle, setSelectedRegionTitle] = useState('Europe');
  const [selectedBase, setSelectedBase] = useState('EUR');
  const selectedRegion = {
    'Europe': ['BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON', 'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB'],
    'Asia': ['CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MYR', 'PHP', 'SGD', 'THB', 'TRY'],
    'North America': ['USD', 'CAD', 'MXN'],
    'South America': ['BRL'],
    'Africa/Oceania': ['ZAR', 'AUD', 'NZD'],
  };
  let [rates, setRates] = useState([])

  function doFetch() {
    fetch('https://api.exchangeratesapi.io/latest?base=' + selectedBase)
        .then(response => response.json())
        .then(data => {
          setRates(Object.entries(data.rates));
        });
  }

useEffect(doFetch, [selectedRegionTitle, selectedBase]);

  return (
    <div className="App">
      <MainHeader
        title="Currency Exchange Rates"
        subtitle={'Base Currency: 1 ' + selectedBase}
      />

        <div className="Container">
          {/* BarChart component */
            /* GraphHeader component */
            /* GraphText component */ 
            /* GraphContent component */
          }
            <div className="Graph">
              <BarChartHeader
                className="Graph-select"
                regionSelect="Select Continental Region:"
                baseSelect="Select base currency:"
                onChangeRegion={event => setSelectedRegionTitle(event.target.value)}
                onChangeBase={event => setSelectedBase(event.target.value)}
              />
      
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
                <div className="Graph-content">
                  {
                    rates
                    .filter(rate => selectedRegion[selectedRegionTitle].includes(rate[0]))
                    .map(rate => (
                    <div className="Graph-bar" key={rate[0]} style={{width: (1/rate[1] * 100) + '%'}}></div>  
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
