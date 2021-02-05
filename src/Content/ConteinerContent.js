import React from 'react';
import '../Content/ConteinerContent.css';
import Display from './Display/Display';
import Text from './Text/Text'


class ConteinerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textElem: { justifyContent: 'flex-start' },
      changeLevel: 0
    }
  };



  dataStyle = (item) => {
    this.setState({
      textElem: item
    })

    console.log(this.state.textElem, 'content')
  }



  render() {
    const { textElem } = this.state;
    const { dataStyle } = this;
    return (
      <div className="content-flex">
        <Text dataStyle={dataStyle} />
        <Display itemDisplay={textElem} />
      </div>
    );
  }
};

export default ConteinerContent;

