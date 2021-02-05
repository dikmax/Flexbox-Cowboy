import React from 'react';
import '../Display/Display.css'




class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockCowboy: 'Man',
      blockСell: 'Prison'
    }
  };


  render() {
    return (
      <div className="display-conteiner " style={this.props.itemDisplay} >
        <div className="display-item--cowboy"></div>
         <div className="display-item--prison"><div><p>Клетка</p></div></div>
      </div>
    );
  }
};

export default Display;

