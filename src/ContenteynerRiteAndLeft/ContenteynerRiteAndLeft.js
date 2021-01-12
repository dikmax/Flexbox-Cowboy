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
      this.setState({ userCode: value })
  };
  
  render(){
 
    return (
      <>
        <LeftContent inputLeftValue={this.inputLeftValue}
            FlexMoving = {this.state.FlexMoving} />
        <RiteContent 
        FlexMoving = {this.state.FlexMoving}
        />
      </>
    );
  } };




export default ContenteynerRiteAndLeft;