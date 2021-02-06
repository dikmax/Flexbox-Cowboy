import React from 'react';
import '../Display/Display.css'




class Display extends React.Component {
  constructor(props) {
    super(props);
  
  };

  
  render() {
    const {itemDisplay}= this.props
    return (
      <div className="display-conteiner " style={itemDisplay} >
        <div className="display-item--cowboy"></div>
        <div className="display-item" style={{justifyContent: 'flex-start'}} > <div className="display-item--prison"></div></div>

      </div>
    );
  }
};

export default Display;

