import React from 'react'
import './PopUp.css'
import Ha from './ha.mp3'
const PopUp = ({ levelCompleted } = this.props) => {
  const haha = new Audio(Ha)
  const classes = ['modal']
  if (levelCompleted !== true) {
    classes.push('active')
    haha.play()
  };

  return (
    <div className={classes.join(' ')}>
      <div className='modal__content'>
        <div className="modal__text"><p> <span>Джо cбежал</span></p></div>
      </div>
      {/* изначально план был что бы модальное окно появлялось в зависимости от props и по клику закрывалось,  делал через класс и менял стейт в зависимости от пропса но получалось зацикливание, в текущем положении тоже не получилось, сделал окно без кнопки через timer в props, еще пробовал компоненты жизненного цикла, тоде не вышло. Так как я хотел сделать основную логику popUp здесь, то решил не добавлять новых state родительскому компоненту для реализации закрытия. */}
      {/* <div className="modal__close"><button className="close__btn" onClick={() => test()}>X</button></div> */}
    </div>
  )
};

export default PopUp;