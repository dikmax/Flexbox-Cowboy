import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import LeftContent from '../LeftContent/LeftContent'
import RiteContent from '../RiteContent/RiteContent'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div>
      <Navigation/>
      <LeftContent/>
      <RiteContent/>
      <Footer/>
    </div>
  );
}

export default App;
