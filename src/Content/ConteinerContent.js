import React from 'react';
import '../Content/ConteinerContent.css';
import Display from './Display/Display';
import Text from './Text/Text'


class ConteinerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { justifyContent: 'flex-start' }
    }
  };

  dataStyle = (item) => {
    this.setState({
      data: item
    })
  
    console.log(this.state.data, 'content')
  }



  render() {
    return (
      <div className="content-flex">
        <Text dataStyle={this.dataStyle}/>
        <Display itemDisplay={this.state.data}/>
      </div>
    );
  }
};

export default ConteinerContent;

