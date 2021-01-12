import React from 'react';
import ReactDOM from 'react-dom';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    Conserva:  {  
     nachalo: null,     
     vopros: null,
     konec: null,
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
    
    




render(){
  return (
    <div>
    </div>
    );
} };




export default RiteContent;