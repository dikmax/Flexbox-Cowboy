import React from 'react';
import ReactDOM from 'react-dom';
import '../Content/Content.css'
import Display from '../Content/Display/Display'


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
     <Display/>
    </div>
  );
} };

export default Content;

