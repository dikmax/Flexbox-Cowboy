import React from 'react';
import ReactDOM from 'react-dom';

class  Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       answer:  ['']
    }};


  

     testing = ()=>{
       console.log(this.props)
     }
  
   

    
render(){
  return (
    <>
      <button style={{color: 'red'}} onClick={this.testing}>TESTING</button>
    </>
  );
} };





export default Questions;