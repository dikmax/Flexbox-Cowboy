import React from 'react';

import '../Element/ButtonText.css';




class ButtonText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Text'
        }
    };
 
    render() {
        return (
            <div className="text-button__conteiner">
                <div className="text-flex">
                <div className="button__text"><p>Уровень</p></div>
                <div className="batton-item">
                    <div ><button className="button--1" type="button">назад</button></div>
                    <div ><button className="button--2" type="button">вперед</button></div>
                    <div ></div>
                </div>
                </div>
            </div>
        );
    }
};

export default ButtonText;

