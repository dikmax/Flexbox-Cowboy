import React from 'react';
import './SubTitle.css';

class SubTitle extends React.Component {

    render() {
        const { taskDescription } = this.props;

        let infoElement = this.props.infoElement.map((item) => {// информация по левелу
            return <li className="level__li" key={
                Math.random(1, 42)
            }>{item}</li>
        });

        return (
            <div className="level">
                <div className="level__header"><p>{taskDescription}</p></div>
                <div className="level__ul">
                    <ul>
                        {infoElement}
                    </ul>
                </div>
            </div>
        );
    }
};

export default SubTitle;

