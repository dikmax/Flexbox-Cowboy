import React from 'react'
import './PopUp.css'


const PopUp = ({ levelCompleted } = this.props) => {

const classes = ['modal']
if (levelCompleted !== true) {
  classes.push('active')
} 

  return (
    <div className={classes.join(' ')}>
      <div className='modal__content'>
        <div className="modal__text"><p> <span>Джо cбежал</span></p></div>
      </div>
    </div>
  )
}

export default PopUp;
