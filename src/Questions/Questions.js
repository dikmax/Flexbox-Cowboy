import React from 'react';
import ReactDOM from 'react-dom';

class  Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       answer:  ['']
    }};






  

     testing = ()=>{
       const oldArray = this.props.tes[2].userText
       const newArray = oldArray.split(':');
       const obgUser = newArray[0]
       const strUser = newArray.slice(1);
       
       
       console.log(strUser);
     };
  
   







    
render(){
  return (
    <>
      <button  onClick={this.testing}>TESTING</button>
    </>
  );
} };





export default Questions;