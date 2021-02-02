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
      {task: {justifyContent: 'center;'}}]) 
      };
    

  };


  // test = (inpt) => {
  //   // вывожу от пользователя и передаю в state
  //   this.setState({ level1: inpt })
  // }


  test2 = () => {
    // // изменяю текс из инпута в подходящий для style jsx
    // let valueInpt = this.state.level1.split(':')
    // let key = valueInpt[0].split('-') 
    //   .map(
    //     (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    //   )
    //   .join('') 
    // let value = valueInpt[1]
    // const obg={};
    // obg[key] = value;
    // console.log(this.state.level1.introductory)
    this.props.dataStyle(this.state.level1[2].task)
    console.log('щл')
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

