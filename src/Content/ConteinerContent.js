import React from 'react';
import '../Content/ConteinerContent.css';
import Display from './Display/Display';
import TitleHeader from '../Content/Element/TitleHeader'
import TextBtn from '../Content/Element/TextBtn'
import InfoLevel from '../Content/Element/InfoLevel'
import Output from '../Content/Element/Output'
import StartButton from '../Content/Element/StartButton'

class ConteinerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      level: [
        [{ introductory: 'Привет! "Информация о блоке". Мы пойдем от простого к сложному "Первый блок"' },
        { taskDescription: 'Помести преступника в клетку(центр).' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['justify-content ~ свойство которое отвечает за расположение элементов по оси X.'], ['justify-content: center; ~ располагает елемент в центре блока.']] },
          {locationCells:{justifyContent: 'center'}}],

        [{ introductory: 'Начало положено. Как известно "Дорогу осилит идущий".' },
        { taskDescription: 'Теперь помести преступника в клету справа.' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['justify-content: center; ~ располагает елемент в центре блока.'], ['justify-content: flex-end; ~ располагает элемент в правом углу по оси X.']] },
        {locationCells:{justifyContent: 'flex-end'}}],

        [{ introductory: 'Компания, в моем лице, считает что ты молодец!' },
        { taskDescription: 'Ты знаешь, что нужно сделать.' },
        { task: { justifyContent: 'center' } },
        { infoElement: [['justify-content: center; ~ располагает елемент в центре блока.'], ['третий'], ['justify-content: flex-end; ~ располагает элемент в правом углу по оси X.'], ['justify-content: flex-start; ~ располагает элемент в левом углу по оси X.']] },
        {locationCells:{ justifyContent: 'flex-start' }}]
      ],
      textElem: { justifyContent: 'flex-start' },
      chLevel: 0,
    }
  };
  setLevelDown = () => {
    let count = this.state.chLevel;
    if (count < this.state.level.length & count !== 0) {
      count--;
    }
    this.setState({
      chLevel: count
    })
  };

  setLevelUp = () => {
    let count = this.state.chLevel;
    if (count < (this.state.level.length - 1)) {
      count++;
    }
    this.setState({
      chLevel: count
    })
  };

  test = (inpt) => { // получаю из инпута текс, отдаю в стейт
    const newDisplay = this.state.level
    newDisplay[this.state.chLevel][2].task = (inpt)
    this.setState({
      level: newDisplay
    })
  };

  test2 = () => {

    try {
      let clone = this.state.level[this.state.chLevel].slice(0) // клонирую state
      const separation = clone[2].task //убираю лишнии пробелы и точки с запятой
        .replace(/\s/g, '')
        .split(';')
        .filter(function (item) {
          return item !== "";
        });

      const transform = separation.map(function (item) { // убираю лишнее и делаю заглавные буквы

        return (item.split(':')[0])
          .split('-')
          .map(
            (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
          ).join('') + ':' + item.split(':')[1]
      });

      const obj = transform.map(function (item) { // делаю подходящий для JSX формат.
        const newObj = {};
        newObj[item.split(':')[0]] = item.split(':')[1]
        return newObj;
      })

      this.props.dataStyle(...obj);
      console.log(...obj, 'test2')
    }

    catch {
      console.log('err test2 in outPut')
    }
  };

  render() {

    const { setLevelUp, setLevelDown, test, test2 } = this;
    const { textElem, level, chLevel } = this.state;

    return (
      <div className="content-flex">
        <div className="text-conteiner">
          <TitleHeader introductory={level[chLevel][0].introductory} />
          <TextBtn setLevelDown={setLevelDown}
            setLevelUp={setLevelUp} />
          <InfoLevel infoElement={level[chLevel][3].infoElement}
            taskDescription={level[chLevel][1].taskDescription} />
          <Output test={test} />
          <StartButton test={test2} />
        </div>
        <Display itemDisplay={textElem} />
      </div>
    );
  }
};

export default ConteinerContent;

