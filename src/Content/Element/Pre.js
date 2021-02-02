import React from 'react';

import '../Element/Pre.css';


 

class Pre extends React.Component {   
 render() {
        return (
            <div className="exit-conteiner">
                <p  className="exit--befor">  .class &ensp;&#123; <br/>display: flex; </p>
                <textarea className="exit__input"
                         // placeholder="Поле ввода"
                         defaultValue="justify-content: center"
                          rows="3"
                          onChange={(e)=>{this.props.test(e.target.value)}}
                ></textarea>
                <p className="exit--after"> &#125;</p>
            </div>)

    }
};

export default Pre;

