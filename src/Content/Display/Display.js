import React from 'react';
import '../Display/Display.css'




class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockCowboy: 'Man',
      blockСell: [{ justifyContent: 'center' }, { justifyContent: 'flex-end' }, { justifyContent: 'flex-start' }]
    }
  };

  // style={blockСell[2]}
  render() {
    const { blockСell } = this.state;
    return (
      <div className="display-conteiner " style={this.props.itemDisplay} >

        <div className="display-item--cowboy"></div>
        <div className="display-item" style={blockСell[1]} > <div className="display-item--prison"></div></div>

      </div>
    );
  }
};

export default Display;

