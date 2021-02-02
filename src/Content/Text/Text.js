import React from 'react';

import '../Text/Text.css'
import HeaderText from '../Element/HeaderText'
import ButtonText from '../Element/ButtonText'
import InfoLevel from '../Element/InfoLevel'
import Pre from '../Element/Pre'
import StartButton from '../Element/StartButton'





class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level1: ([ {introductory:'Привет! "Информация о блоке". Мы пойдем от простого к сложному "Первый блок"'},
      {taskDescription: 'надо то то'},
      {task: {justifyContent: 'flex-end'}}]) 
      };
    

  };


   test = (inpt) => { // меняем стейт из инпута
    const newDisplay = this.state.level1
    newDisplay[2].task = (inpt)
    this.setState({
      level1: newDisplay
    })
    console.log(this.state.level1[2].task)
  }


  test2 = () => {
     // изменяю текст из инпута в подходящий для style jsx, передаю вверх готовый стиль
    let valueInpt = this.state.level1[2].task.split(':')
    let key = valueInpt[0].split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
       )
       .join('') 
    let value = valueInpt[1]
    const obj={};
    obj[key] = value;
 
  this.props.dataStyle(obj)
    
  }


  render() {
     
    return (
      <div className="text-conteiner">
        <HeaderText introductory = {this.state.level1[0].introductory}/>
        <ButtonText />
        <InfoLevel />
        <Pre test={this.test}   />
        <StartButton test={this.test2} />
      </div>
    );
  }
};

export default Text;

