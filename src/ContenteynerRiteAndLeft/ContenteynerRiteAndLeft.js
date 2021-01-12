import React from 'react';
import ReactDOM from 'react-dom';
import './ContenteynerRiteAndLeft.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';

class ContenteynerRiteAndLeft extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        before: ['display: flex;'],
        userCode: ['userCodeQ'],
        after: ['justify-content: flex-end;']
    }};
  
  
  inputLeftValue = (value) => {
      this.setState({ userCode: value })
  };
  
  render(){
 
    return (
      <>
        <LeftContent inputLeftValue={this.inputLeftValue}
            userCode = {this.state.userCode}
            after ={this.state.after} 
            before = {this.state.before} />
        <RiteContent 
        userCode = {this.state.userCode}
        />
      </>
    );
  } };




export default ContenteynerRiteAndLeft;