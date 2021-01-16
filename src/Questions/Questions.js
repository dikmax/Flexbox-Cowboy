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
       const newArray = oldArray.split(':')
       
       console.log(newArray)
     };
  
   







    
render(){
  return (
    <>
      <button  onClick={this.testing}>TESTING</button>
    </>
  );
} };





export default Questions;