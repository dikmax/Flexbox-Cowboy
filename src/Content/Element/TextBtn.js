import React from 'react';

import '../Element/TextBtn.css';



const ButtonText = () => {

    return (
        <div className="text-button__conteiner">
            <div className="text-flex">
                <div className="button__text"><p>Уровень</p></div>
                <div className="batton-item">
                    <div ><button className="button--1" type="button"
                        onClick={this.props.setLevelDown}>НАЗАД</button></div>
                    <div ><button className="button--2" type="button" onClick={this.props.setLevelUp}>вперед</button></div>
                    <div ></div>
                </div>
            </div>
        </div>
    );

};

export default ButtonText;

