import React from 'react'
import './PopUp.css'

 const PopUp = () => {
 //active
    return (
      <div className="modal active"> 
        <div className='modal__content' onClick={e => e.stopPropagation()}>
          <div className="modal__text"><p> Джо cбежал</p></div>
        </div>
      </div>)
  }
  export default PopUp;