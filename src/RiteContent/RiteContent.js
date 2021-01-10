import React from 'react';
import ReactDOM from 'react-dom';
import './RiteContent.css';
import Cowboy from '../Source/jpeg/cowboy.jpg'
 

const test = <img src={Cowboy} alt="Нет ковбоя"></img>;
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
      <div style={this.state.FlexMoving}><div className="img-bad-cowboy"></div>{this.props.move}</div>
    </div>
    );
} };




export default RiteContent;
