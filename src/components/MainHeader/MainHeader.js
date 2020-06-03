import React from 'react';
import './MainHeader.css';

function MainHeader(props) {

  return (
    <header>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
</header>
  );
}

export default MainHeader;
