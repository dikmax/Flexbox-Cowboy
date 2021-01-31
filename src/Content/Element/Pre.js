import React from 'react';
import ReactDOM from 'react-dom';
import '../Element/Pre.css';




class Pre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Text'
        }
    };

    render() {
        return (
            <div className="exit-conteiner">
                <p  className="exit--befor"> Текст до &#9829; </p>
                <textarea className="exit__input" defaultValue="Поле ввода"
                ></textarea>
                <p className="exit--after">&#9829;</p>
            </div>)

    }
};

export default Pre;

