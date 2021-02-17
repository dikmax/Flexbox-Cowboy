import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ConteinerContent from '../Component/MainWrapper/ConteinerContent'

/* Привет! Есть ощущение что это мой долгострой и для дальнейшего расширения мне чего то не хватает(база данных или пока не понимаю чегоб но все храниться как то неудобно и писать уровни в стейт кажется не лучшая идея.)

Цели проекта: получить опыт, сделать нестандартный проект( не туду лист, инфо о погоде или пица хат), который можно показать. Если одобришь то доделаю косяки(на которые укажешь) или добалю что то(до чего сам не додумался) и буду показывать этот вариант как демо версию.

Вообщем ожидаю от тебя оценки, предложений, любых советов.

 PS: Картинки хочу нарисовать сам, но пока пользуюсь тем что гугл дал.
 PS2: Тут есть звуки*/


class App extends React.Component{
  
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

