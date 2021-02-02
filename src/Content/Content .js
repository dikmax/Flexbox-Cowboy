import React from 'react';

import '../Content/Content.css';
import Display from '../Content/Display/Display';
import Text from '../Content/Text/Text'


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { justifyContent: 'center' }
    }
  };

  dataStyle = (item) => {
    this.setState({
      data: item
    })
    console.log(this.state.data)
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

export default Content;

