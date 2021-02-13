import React from 'react';
import './StartButton.css';

const StartButton = ({ test } = this.props) => {

    return (
        <div className="start">
            <div className="start_conteiner">

                <button
                    className="start__button"
                    type="button"
                    onClick={test}
                >Старт</button></div>

        </div>)

};

export default StartButton;

