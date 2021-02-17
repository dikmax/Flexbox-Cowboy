import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ConteinerContent from '../Component/MainWrapper/ConteinerContent'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    editBtnValue: ['good','ffod']
  }};

render(){ 
  return (
    <div>
      <Header/>
      <ConteinerContent/>
      <Footer/>
    </div>
  );
} };

export default App;

