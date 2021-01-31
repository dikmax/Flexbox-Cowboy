import React from 'react';
import ReactDOM from 'react-dom';
import '../Text/Text.css'
import HeaderText from '../Element/HeaderText'
import ButtonText from '../Element/ButtonText'
import InfoLevel from '../Element/InfoLevel'
import Pre from '../Element/Pre'




class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Text'
    }
  };

  render() {
    return (
      <div className="text-conteiner">
        <HeaderText/>
        <ButtonText/>
        <InfoLevel/>
        <Pre/>     
      </div>
    );
  }
};

export default Text;

