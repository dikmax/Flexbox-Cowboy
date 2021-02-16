import React from 'react'
import './PopUp.css'



const PopUp = ({ levelCompleted } = this.props) => {

  const classes = ['modal']
  if (levelCompleted !== true) {
    classes.push('active')
  }
  function test() { // тут хотел убирать класс 'Active' по клику, но не понял как это сделать.
    console.log(classes)
  };

  return (
    <div className={classes.join(' ')}>
      <div className='modal__content'>
        <div className="modal__text"><p> <span>Джо cбежал</span></p></div>
      </div>
      {/* <div className="modal__close"><button className="close__btn" onClick={() => test()}>X</button></div> */}
    </div>
  )
}

export default PopUp;