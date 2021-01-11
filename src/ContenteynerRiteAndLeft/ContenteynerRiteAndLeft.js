import React from 'react';
import ReactDOM from 'react-dom';
import './ContenteynerRiteAndLeft.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';

class ContenteynerRiteAndLeft extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      editBtnValue: ['']

    }};
  
  inputLeftValue = (value) => {
      this.setState({ editBtnValue: value })
  };
  
  render(){
    return (
      <>
        <LeftContent />
        <RiteContent move = {this.state.editBtnValue}   />
      </>
    );
  } };




export default ContenteynerRiteAndLeft;