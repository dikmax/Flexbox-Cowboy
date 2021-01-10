import React from 'react';
import ReactDOM from 'react-dom';
import './RiteContent.css';
import Cowboy from '../Source/jpeg/cowboy.jpg'
 
class RiteContent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
    FlexMoving:  {
                 display: "flex",             
                 justifyContent: "center",
                 }};
                
  
};


render(){
  return (
    <div className="content-rite">
      <div style={this.state.FlexMoving}><h1>{'work'}</h1></ div>
    </div>
    );
} };




export default RiteContent;
