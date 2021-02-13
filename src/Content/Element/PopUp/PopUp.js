import React from 'react'
import './PopUp.css'


class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  };

  render() {
    const test = (e) => {
      let q = e.target
      return q.className = "modal"
    }

    return (
      <div className='modal active' onClick={test}>
        <div className='modal__content'>
          <div className="modal__text"><p> Джо cбежал</p></div>
        </div>
      </div>
    );
  }
};

export default PopUp;
