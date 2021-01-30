import React from 'react';
import ReactDOM from 'react-dom';
import './RiteContent.css';
import Cowboy from '../Source/jpeg/cowboy.png'
 

const test = <img src={Cowboy} alt="Нет ковбоя"></img>;
class RiteContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    FlexMoving:  {  
     display: 'flex',       
     justifyContent: 'center',
    }};  
};

 

render(){
  const array = '';
  return (
    <div className="block__conteiner user">
      <div className="block__svg"></div>
    </div>
    );
} };




export default RiteContent;
