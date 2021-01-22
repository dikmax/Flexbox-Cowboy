import React from 'react';
import ReactDOM from 'react-dom';
import './ContenteynerRiteAndLeft.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';
import Questions from "../Questions/Questions";

class ContenteynerRiteAndLeft extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        flexMoving:  ([
          ['description',  `Добро пожаловать в ... Игра, в которой тебе нужно ... и его друзьям написанием CSS кода!  Направь этого ... на лилию справа используя свойство justify-content, которое выравнивает элементы горизонтально и принимает следующие значения:`],
          ['ulElement', [
           ['flex-start Элементы выравниваются по левой стороне контейнера.'],
           ['flex-end Элементы выравниваются по правой стороне контейнера.'],
           ['center Элементы выравниваются по центру контейнера.'],
           ['space-between Элементы отображаются с одинаковыми отступами между ними.'],
           ['space-around Элементы отображаются с одинаковыми отступами вокруг них.'],
          ]],
     { display: 'flex',
       
     },
    ])
      }};

       
    setUserText = (userText) =>{
 console.log(`RaL выводит ${userText}`)
    };
     

      
  render(){
    return (
      <>
        <LeftContent keyAndValue ={this.state.flexMoving}
        setUserText = {this.setUserText}/>
        <RiteContent
         newItem ={this.newItem}
         inlaynStyle ={this.state.flexMoving[2]}/>
      </>
    );
  } };




export default ContenteynerRiteAndLeft;