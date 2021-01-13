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
 
      inputLeftValue = (value) => {
        this.setState({ display: value })
        console.log(this.state)
        //console.log(this.state.FlexMoving.id)

      };
      
  render(){
    const {display, justifyContent} = this.state.FlexMoving;
    const Qwest = [
      { id:1},
      { id:2},
      { id:3},
      { id:4},
      { id:5}
    ]
    return (
      <>
        <LeftContent
         inputLeftValue={this.inputLeftValue}
         before = {display}
         after={justifyContent} />
        <RiteContent 
        FlexMoving = {this.state}/>
      </>
    );
  } };




export default ContenteynerRiteAndLeft;