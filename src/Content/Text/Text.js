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
      level: ([{ introductory: 'Привет! "Информация о блоке". Мы пойдем от простого к сложному "Первый блок"' },
      { taskDescription: 'Помести преступника в клетку' },
      { task: { justifyContent: 'flex-start' } },
      { infoElement: [['justify-content ~ свойство которое отвечает за расположение элементов по оси'], ['justify-content: centr; ~ располагает елемент в центре блока']] }
      ])
    };


  };


  test = (inpt) => { // получаю из инпута текс, отдаю в стейт
    const newDisplay = this.state.level
    newDisplay[2].task = (inpt)
    this.setState({
      level: newDisplay
    })
  }


  test2 = () => {
    // изменяю текст из стейта в подходящий для style jsx, передаю вверх готовый стиль
    let valueInpt = this.state.level[2].task.split(':')
    let key = valueInpt[0].split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('')
    let value = valueInpt[1]
    const obj = {};
    obj[key] = value;
    this.props.dataStyle(obj)
    console.log(this.state.level)
  }


  render() {

    return (
      <div className="text-conteiner">
        <HeaderText introductory={this.state.level[0].introductory} />
        <ButtonText />
        <InfoLevel infoElement={this.state.level[3].infoElement} taskDescription={this.state.level[1].taskDescription} />
        <Pre test={this.test} />
        <StartButton test={this.test2} />
      </div>
    );
  }
};

export default Text;

