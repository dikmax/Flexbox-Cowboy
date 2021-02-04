import React from 'react';
import '../Text/Text.css'
import TitleHeader from '../Element/TitleHeader'
import TextBtn from '../Element/TextBtn'
import InfoLevel from '../Element/InfoLevel'
import Output from '../Element/Output'
import StartButton from '../Element/StartButton'





class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: [
        [{ introductory: 'Привет! "Информация о блоке". Мы пойдем от простого к сложному "Первый блок"' },
        { taskDescription: 'Помести преступника в клетку(центр)' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['justify-content ~ свойство которое отвечает за расположение элементов по оси X'], ['justify-content: center; ~ располагает елемент в центре блока']] }],

        [{ introductory: 'второй' },
        { taskDescription: 'второй' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['второй'], ['второй']] }],

        [{ introductory: 'третий' },
        { taskDescription: 'третий' },
        { task: { justifyContent: 'третий' } },
        { infoElement: [['третий'], ['третий'], ['третий'], ['третий']] }]
      ],
      chLevel: 0

    };

  };

  setLevelDown = () => {
    let count = this.state.chLevel;
    if (count < this.state.level.length & count !== 0) {
      count--;
    }
    this.setState({
      chLevel: count
    })
  }
  setLevelUp = () => {
    let count = this.state.chLevel;
    if (count < (this.state.level.length - 1)) {
      count++;
    }
    this.setState({
      chLevel: count
    })
  }

  test = (inpt) => { // получаю из инпута текс, отдаю в стейт
    const newDisplay = this.state.level
    newDisplay[this.state.chLevel][2].task = (inpt)
    this.setState({
      level: newDisplay
    })
  }

  test2 = () => {

    try {
      let clone = this.state.level[this.state.chLevel].slice(0) // клонирую state
      const separation = clone[2].task //убираю лишнии пробелы и точки с запятой
        .replace(/\s/g, '')
        .split(';')
        .filter(function (item) {
          return item !== "";
        });



      const result = separation.map(function (item) { // убираю дефис и делаем заглавные буквы

        return (item.split(':')[0])
          .split('-')
          .map(
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
          ).join('') + ':' + item.split(':')[1]
      });

      const obj = result.map(function (item) { // делаю подходящий для JSX формат.
        const newObj = {};
        newObj[item.split(':')[0]] = item.split(':')[1]
        return newObj;
      })
      this.props.dataStyle(obj[0]);
      console.log(result, 'test2')
    }

    catch {
      console.log('err test2 in outPut')
    }
  }


  render() {
    const { level, chLevel } = this.state
    return (
      <div className="text-conteiner">
        <TitleHeader introductory={level[chLevel][0].introductory} />
        <TextBtn setLevelDown={this.setLevelDown}
          setLevelUp={this.setLevelUp} />
        <InfoLevel infoElement={level[chLevel][3].infoElement}
          taskDescription={level[chLevel][1].taskDescription} />
        <Output test={this.test} />
        <StartButton test={this.test2} />
      </div>
    );
  }
};

export default Text;

