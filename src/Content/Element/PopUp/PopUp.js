import React from 'react'
import './PopUp.css'


const PopUp = ({ levelCompleted } = this.props) => {

const classes = ['modal']
if (levelCompleted !== true) {
  classes.push('active')
} 
const test = (e) => {
let a = 5;
 console.log(e.target)
}
 
  

  return (
    <div className={classes.join(' ')}>
      <div className='modal__content'>
        <div className="modal__text"><p> <span>Джо cбежал</span></p></div>
      </div>
      <div className="modal__close"><button className="close__btn" onClick={test}>X</button></div>
    </div>
  )
}

export default PopUp;
