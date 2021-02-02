import React from 'react';

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
         <div className="header__title"><p>Привет! "Информация о блоке".
          Мы пойдем от простого к сложному
           "Первый блок"</p></div>
      </div>
    );
  }
};

export default HeaderText;

