import React from 'react';
import ReactDOM from 'react-dom';

class  Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       answer: null
    }};






  

     testing = ()=>{


       const oldArray = this.props.tes[2].userText
       const newArray = oldArray.split(':');
       let obgArray = newArray[0];
       const knufArray = newArray.slice(1);
       const txtArray = knufArray.join(' ');
      
       console.log(arra);
     };
  
   







    
render(){
  return (
    <>
      <button  onClick={this.testing}>TESTING</button>
    </>
  );
} };





export default Questions;