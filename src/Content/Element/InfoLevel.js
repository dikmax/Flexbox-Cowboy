import React from 'react';

import '../Element/InfoLevel.css';




class InfoLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Text'
        }
    };

    render() {
        let infoElement = this.props.infoElement.map((item) => {// информация по левелу
            return <li className="level__li" key={
                Math.random(1, 42)
            }>{item}</li>
        });

        return (
            <div className="level">
                <div className="level__header"><p>{this.props.taskDescription}</p></div>
                <div className="level__ul">
                    <ul>
                        {infoElement}
                    </ul>
                </div>
            </div>
        );
    }
};

export default InfoLevel;

