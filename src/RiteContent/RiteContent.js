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
 

render(){
  const array = '';
  return (
    <div className="content-rite">
      <div style={this.props}className="img-bad-cowboy">
        <img src={Cowboy} alt="тут могла быть ваша реклама"></img>
        <button  onClick = {()=>console.log(this.props)} >TEST</button>
     </div>
    </div>
    );
} };




export default RiteContent;
