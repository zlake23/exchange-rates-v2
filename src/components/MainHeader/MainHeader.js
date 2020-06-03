import React, {useState} from 'react';
import './MainHeader.css';

function MainHeader(props) {
  const [selectedBase, setSelectedBase] = useState('EUR');
  return (
    <header>
    <h1>{props.title}</h1>
    <h2>Base Currency: 1 {selectedBase}</h2>
</header>
  );
}

export default MainHeader;
