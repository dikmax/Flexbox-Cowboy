import React from 'react';
import '../Display/Display.css'




const Display = ({itemDisplay}= this.props) => {
  
  
  
    return (
      <div className="display-conteiner " style={itemDisplay} >
        <div className="display-item--cowboy"></div>
        <div className="display-item" style={{justifyContent: 'flex-start'}} > <div className="display-item--prison"></div></div>

      </div>
    );
  
};

export default Display;

