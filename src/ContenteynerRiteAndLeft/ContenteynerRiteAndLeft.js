import React from 'react';
import ReactDOM from 'react-dom';
import './ContenteynerRiteAndLeft.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';


class ContenteynerRiteAndLeft extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        FlexMoving:  {  
          display: 'flex',       
          justifyContent: 'center',
        }     
      }};
 
 

  
  render(){
   
    const {display, justifyContent} = this.state.FlexMoving
    return (
      <>
        <LeftContent
         inputLeftValue={this.inputLeftValue}
         before = {display}
         after={justifyContent} />
        <RiteContent 
        FlexMoving = {this.state.FlexMoving}
        />
      </>
    );
  } };




export default ContenteynerRiteAndLeft;