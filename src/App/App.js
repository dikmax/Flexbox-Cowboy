import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ConteinerContent from '../Component/MainWrapper/ConteinerContent'

class App extends React.Component{
  
// Комментарии:
//
//
//

render(){ 
  return (
    <div className='app__wrapper'>
      <Header/>
      <ConteinerContent/>
      <Footer/>
    </div>
  );
} };

export default App;

