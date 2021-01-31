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
            <div className="editor">
                <pre id="befor"> Текст до &#9829; </pre>
                <textarea id="code" defaultValue="Поле ввода"
                ></textarea>
                <pre id="after">&#9829;</pre>
            </div>)

    }
};

export default Pre;

