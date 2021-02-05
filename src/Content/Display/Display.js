import React from 'react';
import '../Display/Display.css'




class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockCowboy: 'Man',
      blockСell: [{ margin: '4px 353px'}]
    }
  };


  render() {
   const {blockСell} = this.state;
    return (
      <div className="display-conteiner " style={this.props.itemDisplay} >
        <div className="display-item--cowboy"></div>
        <div className="display-item--prison" style={blockСell[0]}></div> 
      </div>
    );
  }
};

export default Display;

