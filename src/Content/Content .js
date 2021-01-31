import React from 'react';
import ReactDOM from 'react-dom';
import '../Content/Content.css'




class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    data: ['left','rite']
  }};

render(){
  return (
    <div>
     <p>{this.state.data}</p>
    </div>
  );
} };

export default Content;

