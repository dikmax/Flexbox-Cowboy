import React from 'react';
import ReactDOM from 'react-dom';
import './RiteContent.css';


class RiteContent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
    FlexMoving:  {backgroundColor: "#44014C",
                 width: "300px",
                 minHeight: "200px",
                 justifyContent: "flex-end"}
  
  }};


render(){
  return (
    <div className="content-rite">
      <div style={this.state.FlexMoving} ><h1>Flexbox element</h1></ div>
    </div>
    );
} };




export default RiteContent;
