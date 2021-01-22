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
     display: 'flex',       
     justifyContent: 'center',
    }};  
};

 testing =()=>{
 
   
  
  console.log(this.props.inlaynStyle)
 }

render(){
  const array = '';
  return (
    <div className="content-rite">
      <div className="img-bad-cowboy">
        <img src={''} alt="тут могла быть ваша реклама"></img>
        <button  onClick = {this.testing} >TEST</button>
     </div>
    </div>
    );
} };




export default RiteContent;
