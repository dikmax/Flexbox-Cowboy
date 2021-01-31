import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    editBtnValue: ['good','ffod']
  }};



render(){
  return (
    <div>
      <Navigation/>
     <p>Go</p>
    </div>
  );
} };

export default App;

