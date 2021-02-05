import React from 'react';
import '../Display/Display.css'




class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockCowboy: 'Man',
      blockСell: [{ margin: '4px 353px'},{ float: 'left'},{ margin: 'rite'}]
    }
  };

  // style={blockСell[2]}
  render() {
   const {blockСell} = this.state;
    return (
      <div className="display-conteiner " style={this.props.itemDisplay} >
           <div className="display-item--prison" ></div> 
        <div className="display-item--cowboy"></div>
     
      </div>
    );
  }
};

export default Display;

