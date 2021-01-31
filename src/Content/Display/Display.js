import React from 'react';
import ReactDOM from 'react-dom';
import '../Display/Display.css'




class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    data: 'Display'
  }};

render(){
  return (
    <div>
     <p>{this.state.data}</p>
    </div>
  );
} };

export default Display;

