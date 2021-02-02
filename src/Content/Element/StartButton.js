import React from 'react';

import '../Element/StartButton.css';


 

class StartButton extends React.Component {
 

    render() {
       
            
       
        return (
            <div className="start">
                <div className="start_conteiner">
               
                    <button
                        className="start__button"
                        type="button"
                       onClick={this.props.test} 
                    >Старт</button></div>
                    
            </div>)

    }
};

export default StartButton;

