import React from 'react';
import ReactDOM from 'react-dom';
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
                <div className="button__text"><p>Уровень</p></div>
                <div className="batton-item">
                    <div className="button--1"><button type="button">перегруппироваться</button></div>
                    <div className="button--2"><button type="button">вперед</button></div>
                    <div ></div>
                </div>
            </div>
        );
    }
};

export default ButtonText;

