import React from 'react';
import ReactDOM from 'react-dom';
import './ContenteynerRiteAndLeft.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';

class ContenteynerRiteAndLeft extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      editBtnValue: ['good','ffod']
    }};
  
  
  render(){
    return (
      <div>
        
        <LeftContent />
        <RiteContent move = {this.state.editBtnValue}   />
      </div>
    );
  } };




export default ContenteynerRiteAndLeft;