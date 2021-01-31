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
    <div className="display-conteiner  move">
     <div className="display-item"></div>
    </div>
  );
} };

export default Display;

