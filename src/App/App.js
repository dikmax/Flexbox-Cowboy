import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainWrapper from '../Component/MainWrapper/MainWrapper'

/* Привет! Есть ощущение что это мой долгострой и для дальнейшего расширения мне чего то не хватает(база данных или пока не понимаю чегоб но все храниться как то неудобно и писать уровни в стейт кажется не лучшая идея.), есть косячки по верстке.

Цели проекта: получить опыт, сделать нестандартный проект( не туду лист, инфо о погоде или пица хат)

Вообщем ожидаю от тебя оценки, предложений, любых советов.

 PS: Картинки хочу нарисовать сам, но пока пользуюсь тем что гугл дал.
 PS2: Тут есть звуки в Header 'атмосфера' и крайне противный в случае неправильного ввода в Component/element/popup - но я не отключал*/
 /*Основной код написан в Component/MainWrapper*/

 /*надеюсь твои глаза кровить не будут)*/

class App extends React.Component{
  
render(){ 
  return (
    <div className='app__wrapper'>
      <Header/>
      <MainWrapper/> 
      <Footer/>
    </div>
  );
} };

export default App;

