import React from 'react';
import ReactDOM from 'react-dom';
import './ContenteynerRiteAndLeft.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';

class ContenteynerRiteAndLeft extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      after: [''],
      userCode: [''],
      before: ['']
    }};
  
  inputLeftValue = (value) => {
      this.setState({ userCode: value })
  };
  
  render(){
    return (
      <>
        <LeftContent inputLeftValue={this.inputLeftValue} />
        <RiteContent move = {this.state.userCode}   />
      </>
    );
  } };




export default ContenteynerRiteAndLeft;