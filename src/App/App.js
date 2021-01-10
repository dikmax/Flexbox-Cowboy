import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import LeftContent from '../LeftContent/LeftContent'
import RiteContent from '../RiteContent/RiteContent'
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
      <div className='content' >
        <LeftContent />
        <RiteContent move = {this.state.editBtnValue}   />
      </div>
      <Footer/>
    </div>
  );
} };

export default App;

