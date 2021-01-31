import React from 'react';
import ReactDOM from 'react-dom';
import '../Element/StartButton.css';




class StartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Text'
        }
    }; 

    render() {
        return (
            <div className="start">
               <div className="start_conteiner"> <button className="start__button"  type="button">Старт</button></div>        
            </div>)

    }
};

export default StartButton;

