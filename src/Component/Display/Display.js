import React from 'react';
import './Display.css'

const Display = ({ displayPrison, displayCowboy }) => {

  return (
    <div className="display-conteiner " style={displayCowboy} >
      <div className="display-item--cowboy"></div>
      <div className="display-item" style={displayPrison} > <div className="display-item--prison"></div></div>
    </div>
  );

};

export default Display;

