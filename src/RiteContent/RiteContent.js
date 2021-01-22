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

 //testing =()=>{ console.log(this.props.inlaynStyle) }  // <button  onClick = {this.testing} >TEST</button>

 

render(){
  const array = '';
  return (
    <div className="content-rite">
      <div className="img-bad-cowboy">
        <img src={Cowboy} alt="тут могла быть ваша реклама"></img>
     </div>
    </div>
    );
} };




export default RiteContent;
