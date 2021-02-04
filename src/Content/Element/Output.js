import React from 'react';

import '../Element/Output.css';




const Output = ({test} = this.props) => {

    return (
        <div className="exit-conteiner">
            <p className="exit--befor">  .class &ensp;&#123; <br />display: flex; </p>
            <textarea className="exit__input"
              placeholder="Поле для написания кода"
             // defaultValue='justify-content: flex-end'
                rows="3"
                onChange={(e) => {test(e.target.value) }}
            ></textarea>
            <p className="exit--after"> &#125;</p>
        </div>)
};

export default Output;

