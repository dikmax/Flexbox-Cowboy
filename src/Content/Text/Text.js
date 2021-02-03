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
      level:
        [{ introductory: 'Привет! "Информация о блоке". Мы пойдем от простого к сложному "Первый блок"' },
        { taskDescription: 'Помести преступника в клетку' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['justify-content ~ свойство которое отвечает за расположение элементов по оси'], ['justify-content: centr; ~ располагает елемент в центре блока']] }]
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

    let clone = this.state.level.slice(0) // клонирую state
    const separation = clone[2].task //убираем лишнии пробелы и ;
      .replace(/\s/g, '')
      .split(';')
      .filter(function (item) {
        return item !== "";
      });

    const result = separation.map(function (item) { // убираем дефис и делаем заглавные буквы
      return item.split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      ).join('')

    });
    const obj = result.map(function (item) { // делаю подходящий для JSX формат.
      const newObj = {};
      newObj[item.split(':')[0]] = item[1]
      return newObj;
    })
    this.props.dataStyle(obj)
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

