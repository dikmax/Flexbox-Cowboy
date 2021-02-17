import React from 'react';
import '../MainWrapper/ConteinerContent.css';
import Display from '../Display/Display';
import TitleHeader from '../Element/TitleHeader/TitleHeader'
import TextBtn from '../Element/TextBtn/TextBtn'
import InfoLevel from '../Element/InfoLevel/InfoLevel'
import Output from '../Element/Output/Output'
import StartButton from '../Element/StartButton/StartButton'
import PopUp from '../Element/PopUp/PopUp'

class ConteinerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      level: [
        [{ introductory: 'Привет!  "FLEXBOX  просто необходимо знать в соврменной верстке". Мы пойдем от простого к сложному \n "Первый блок"' },
        { taskDescription: 'Помести преступника в клетку(центр).' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['justify-content ~ свойство которое отвечает за расположение элементов по оси X.'], ['justify-content: center; ~ располагает елемент в центре блока.']] },
        { locationCells: { justifyContent: 'center' } }, { id: 1 },],

        [{ introductory: 'Начало положено. Как известно "Дорогу осилит идущий".' },
        { taskDescription: 'Теперь помести преступника в клету справа.' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['justify-content: center; ~ располагает елемент в центре блока.'], ['justify-content: flex-end; ~ располагает элемент в правом углу по оси X.']] },
        { locationCells: { justifyContent: 'flex-end' } }, { id: 2 },],

        [{ introductory: 'Компания, в моем лице, считает что ты молодец!' },
        { taskDescription: 'Ты знаешь, что нужно сделать.' },
        { task: { justifyContent: 'center' } },
        { infoElement: [['justify-content: center; ~ располагает елемент в центре блока.'], ['третий'], ['justify-content: flex-end; ~ располагает элемент в правом углу по оси X.'], ['justify-content: flex-start; ~ располагает элемент в левом углу по оси X.']] },
        { locationCells: { justifyContent: 'flex-start' } }, { id: 3 }]
      ],

      textElem: { justifyContent: 'flex-start' },

      newLev: [{ introductory: 'Привет! "FLEXBOX  просто необходимо знать в соврменной верстке". Мы пойдем от простого к сложному \n "Первый блок"' },
      { taskDescription: 'Помести преступника в клетку(центр).' },
      { task: { justifyContent: 'flex-start' } },
      { infoElement: [['justify-content ~ свойство которое отвечает за расположение элементов по оси X.'], ['justify-content: center; ~ располагает елемент в центре блока.']] },
      { locationCells: { justifyContent: 'center' } }, { id: 1 }],

      levelCompleted: true
    }
  };
  setLevelDown = () => {
    if (this.state.newLev[5].id !== 1) {
      this.setState({
        newLev: this.state.level[(this.state.newLev[5].id) - 2]
      })
    }
  };

  setLevelUp = () => {
    if (this.state.newLev[5].id !== 3) {
      this.setState({
        newLev: this.state.level[this.state.newLev[5].id]
      })
    }
  };

  userInpt = (inpt) => { // получаю из инпута текс, отдаю в стейт
    const newDisplay = this.state.newLev.slice()
    newDisplay[6] = (inpt)
    this.setState({
      newLev: newDisplay
    })
  };

  responseUserProcessing = () => {
    const clone = this.state.newLev.slice() // клонирую state
    if (clone[6] === undefined) {
      this.ifLevelFalse()
    } else {
      this.forJsxFormat(clone)
    }
  };

  forJsxFormat = (itemArr) => {
    const separation = itemArr[6]//убираю лишнии пробелы и точки с запятой
      .replace(/\s/g, '')
      .split(';')
      .filter(function (item) {
        return item !== "";
      });
    console.log(separation, 'шаг 2 separation')

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

    this.setState({
      newLev: itemArr
    })
    if (JSON.stringify(obj[0]) === JSON.stringify(itemArr[4].locationCells)) { // проверка пройден ли уровеь
      this.ifLevelTrue()
    } else { this.ifLevelFalse() }
    itemArr[2].task = obj[0]
  }
  ifLevelTrue = () => {// хотел добавить звук но что то не вышло. Причину не нашел.
    setTimeout(() => {
      this.setLevelUp()
    }, 1500)

  }
  ifLevelFalse = () => { // если введено не правильно

    setTimeout(() => {
      this.setState({
        levelCompleted: false
      })
    }, 800)
    setTimeout(() => {
      this.setState({
        levelCompleted: true
      })
    }, 2000)
  }

  render() {
    const { setLevelUp, setLevelDown, userInpt, responseUserProcessing } = this;
    const { newLev, levelCompleted } = this.state;

    return (
      <div className="content-flex">
        <PopUp levelCompleted={levelCompleted} />
        <div className="text-conteiner">
          <TitleHeader introductory={newLev[0].introductory} />
          <TextBtn setLevelDown={setLevelDown}
            setLevelUp={setLevelUp} levelCount={newLev[5].id} />
          <InfoLevel infoElement={newLev[3].infoElement}
            taskDescription={newLev[1].taskDescription} />
          <Output userInpt={userInpt} />
          <StartButton responseUserProcessing={responseUserProcessing} />
        </div>
        <Display displayPrison={newLev[4].locationCells} displayCowboy={newLev[2].task} />
      </div>
    );
  }
};

export default ConteinerContent;

