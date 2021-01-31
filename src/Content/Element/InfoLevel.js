import React from 'react';
import ReactDOM from 'react-dom';
import '../Element/InfoLevel.css';




class InfoLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Text'
        }
    };

    render() {
        return (
            <div className="level">
                <div className="level__header"><p>Задача</p></div>
                <div className="level__ul">
                    <ul>
                        <li className="level__li"> flex - это</li>
                        <li className="level__li"> flex - это</li>
                        <li className="level__li"> flex - это</li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default InfoLevel;

