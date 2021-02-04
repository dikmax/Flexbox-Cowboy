import React from 'react';
import '../Element/TitleHeader.css';

 


const HeaderText = ({introductory} = this.props) => {
  
    return (
    <div className="header-text">
         <div className="header__title"><p>{introductory}</p></div>
      </div>
    );
  
};

export default HeaderText;

