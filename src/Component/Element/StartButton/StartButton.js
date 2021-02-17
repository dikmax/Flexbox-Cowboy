import React from 'react';
import './StartButton.css';

const StartButton = ({ responseUserProcessing  } = this.props) => {

    return (
        <div className="start">
            <div className="start_conteiner">

                <button
                    className="start__button"
                    type="button"
                    onClick={responseUserProcessing }
                >Старт</button></div>

        </div>)

};

export default StartButton;

