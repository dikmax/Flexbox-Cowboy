import React from 'react';
import ReactDOM from 'react-dom';
import '../Text/Text.css'




class Text extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    data: 'Text'
  }};

render(){
  return (
    <div>
     <p>{this.state.data}</p>
    </div>
  );
} };

export default Text;

