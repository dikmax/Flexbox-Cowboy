import React from 'react';
import './TitleHeader.css';

const HeaderText = ({ introductory }) => {

  return (
    <div className="header-text">
      <div className="header__title"><p>{introductory}</p></div>
    </div>
  )

};

export default HeaderText;

