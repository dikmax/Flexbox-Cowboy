import React from 'react';
import ReactDOM from 'react-dom';
import '../Element/HeaderText.css';




class HeaderText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Text'
    }
  };

  render() {
    return (
    <div className="header-text">
         <div className="header__title"><p>Привет! "Информация о болке".
          Мы пойдем от простого к сложному
          и превое "Первый блок"</p></div>
      </div>
    );
  }
};

export default HeaderText;

