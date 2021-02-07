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
        { locationCells: { justifyContent: 'center' } }, { id: 1 }],

        [{ introductory: 'Начало положено. Как известно "Дорогу осилит идущий".' },
        { taskDescription: 'Теперь помести преступника в клету справа.' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['justify-content: center; ~ располагает елемент в центре блока.'], ['justify-content: flex-end; ~ располагает элемент в правом углу по оси X.']] },
        { locationCells: { justifyContent: 'flex-end' } }, { id: 2 }],

        [{ introductory: 'Компания, в моем лице, считает что ты молодец!' },
        { taskDescription: 'Ты знаешь, что нужно сделать.' },
        { task: { justifyContent: 'center' } },
        { infoElement: [['justify-content: center; ~ располагает елемент в центре блока.'], ['третий'], ['justify-content: flex-end; ~ располагает элемент в правом углу по оси X.'], ['justify-content: flex-start; ~ располагает элемент в левом углу по оси X.']] },
        { locationCells: { justifyContent: 'flex-start' } }, { id: 3 }]
      ],
      textElem: { justifyContent: 'flex-start' },
      chLevel: 0,

      newLev: [{ introductory: 'Привет! "Информация о блоке". Мы пойдем от простого к сложному "Первый блок"' },
        { taskDescription: 'Помести преступника в клетку(центр).' },
        { task: { justifyContent: 'flex-start' } },
        { infoElement: [['justify-content ~ свойство которое отвечает за расположение элементов по оси X.'], ['justify-content: center; ~ располагает елемент в центре блока.']] },
        { locationCells: { justifyContent: 'center' } }, { id: 1 }]
    }
  };
  setLevelDown = () => {
    if(this.state.newLev[5].id !== 1){
      this.setState({
        newLev: this.state.level[(this.state.newLev[5].id) - 2]
      })
    }
  };

  setLevelUp = () => {
    if(this.state.newLev[5].id !== 3){
      this.setState({
        newLev: this.state.level[this.state.newLev[5].id]
      })
    }
  };

  test = (inpt) => { // получаю из инпута текс, отдаю в стейт
    const newDisplay = this.state. newLev.slice()
    newDisplay[newDisplay.length] = (inpt)
    this.setState({
      level: newDisplay
    })
    console.log(newDisplay)
  };

  test2 = () => {

    try {
      let clone = this.state.newLev // клонирую state
    
     const separation = clone[5]//убираю лишнии пробелы и точки с запятой
        .replace(/\s/g, '')
       .split(';')
        .filter(function (item) {
           return item !== "";
       });
   console.log(separation, 'separation' )
  //     const transform = separation.map(function (item) { // убираю лишнее и делаю заглавные буквы

  //       return (item.split(':')[0])
  //         .split('-')
  //         .map(
  //           (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
  //         ).join('') + ':' + item.split(':')[1]
  //     });

  //     console.log(transform, 'transform' )

  //     const obj = transform.map(function (item) { // делаю подходящий для JSX формат.
  //       const newObj = {};
  //       newObj[item.split(':')[0]] = item.split(':')[1]
  //       return newObj;
  //     })
  //     console.log(obj, 'transform')
      
   
    

    }

    catch {
      console.log('err test2 in outPut', console.error(this.error))
    }
  };

  render() {

    const { setLevelUp, setLevelDown, test, test2 } = this;
    const { newLev } = this.state;

    return (
      <div className="content-flex">
        <div className="text-conteiner">
          <TitleHeader introductory={newLev[0].introductory} />
          <TextBtn setLevelDown={setLevelDown}
            setLevelUp={setLevelUp} />
          <InfoLevel infoElement={newLev[3].infoElement}
            taskDescription={newLev[1].taskDescription} />
          <Output test={test} />
          <StartButton test={test2} />
        </div>
        <Display displayPrison={newLev[4].locationCells} displayCowboy={newLev[2].task} />
      </div>
    );
  }
};

export default ConteinerContent;

