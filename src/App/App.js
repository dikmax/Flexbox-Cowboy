import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import ConteinerContent from '../Content/ConteinerContent'

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
      <ConteinerContent/>
      <Footer/>
    </div>
  );
} };

export default App;

