import React from 'react';

import '../Element/TextBtn.css';



const ButtonText = ({ setLevelDown, setLevelUp } = this.props) => {

    return (
        <div className="text-button__conteiner">
            <div className="text-flex">
                <div className="button__text"><p>Уровень</p></div>
                <div className="batton-item">
                    <div ><button className="button--1" type="button"
                        onClick={setLevelDown}>назад</button></div>
                    <div ><button className="button--2" type="button" onClick={setLevelUp}>вперед</button></div>
                    <div ></div>
                </div>
            </div>
        </div>
    );

};

export default ButtonText;

