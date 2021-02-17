import React from 'react';
import './Output.css';

const Output = ({ userInpt }) => {


    return (
        <div className="exit-conteiner">
            <p className="exit--befor">  .class &ensp;&#123; <br />display: flex; </p>
            <textarea className="exit__input"
                placeholder='поле ввода'
                rows="4"
                onChange={(e) => { userInpt(e.target.value) }}
                id="txtarea"
            ></textarea>
            <p className="exit--after"> &#125;</p>
        </div>)

};

export default Output;

