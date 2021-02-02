import React from 'react';

import '../Element/Pre.css';




class Pre extends React.Component {   
 render() {
        return (
            <div className="exit-conteiner">
                <p  className="exit--befor"> Текст до &#9829; </p>
                <textarea className="exit__input"
                          placeholder="Поле ввода"
                          rows="3"
                          onChange={(e)=>{this.props.test(e.target.value)}}
                ></textarea>
                <p className="exit--after">&#9829;</p>
            </div>)

    }
};

export default Pre;

