import React from 'react';
import ReactDOM from 'react-dom';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    Conserva:  {  
     nachalo: [''],     
     vopros: [''],
     konec: [''],
    }};  
};
generationQ = (up, mid,low) => {
    this.setState({
        Conserva:{
            nachalo: up,
            vopros: mid,
            konec: low}
    });
};    

Questions1 = generationQ();
    
    




render(){
  return (
    <div>
    </div>
    );
} };




export default Questions;