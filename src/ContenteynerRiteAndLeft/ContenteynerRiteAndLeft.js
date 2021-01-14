import React from 'react';
import ReactDOM from 'react-dom';
import './ContenteynerRiteAndLeft.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';


class ContenteynerRiteAndLeft extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        FlexMoving:  {  
          description: '',
          ulElement: '',       
          justifyContent: '',
         }     
      }};
      level1 = new Map [
        {descriptionl: 'Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям написанием CSS кода! Направь этого лягушонка на лилию справа используя свойство justify-content, которое выравнивает элементы горизонтально и принимает следующие значения:'
        },
           {ulElementl:
              ['flex-start: Элементы выравниваются по левой стороне контейнера.']
              ['flex-end: Элементы выравниваются по правой стороне контейнера.']
              ['center: Элементы выравниваются по центру контейнера.']
              ['space-between: Элементы отображаются с одинаковыми отступами между ними.']
              ['space-around: Элементы отображаются с одинаковыми отступами вокруг них.']
           },
           {justifyContentl: ['display: flex;']}
         ];
 
      inputLeftValue = (value) => {
        this.setState({ display: value })
        console.log(this.level1)
      };
      
  render(){
    const {display, justifyContent} = this.state.FlexMoving;
    return (
      <>
        <LeftContent
         inputLeftValue={this.inputLeftValue}
         before = {display}
         after={justifyContent} />
        <RiteContent 
        FlexMoving = {this.state}/>
      </>
    );
  } };




export default ContenteynerRiteAndLeft;