import React from 'react';
import ReactDOM from 'react-dom';
import '../Content/Content.css';
import Display from '../Content/Display/Display';
import Text from '../Content/Text/Text'


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['left', 'rite']
    }
  };
  

  render() {
    return (
      <div className="content-flex">
        <Text />
        <Display />
      </div>
    );
  }
};

export default Content;

