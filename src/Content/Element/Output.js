import React from 'react';

import '../Element/Output.css';


 

class Output extends React.Component {   
 render() {
        return (
            <div className="exit-conteiner">
                <p  className="exit--befor">  .class &ensp;&#123; <br/>display: flex; </p>
                <textarea className="exit__input"
                        //  placeholder="Поле ввода" 
                          defaultValue="justify-content: center; justify-content: flex-end" 
                          rows="3"
                       onChange={(e)=>{this.props.test(e.target.value)}}
                ></textarea>
                <p className="exit--after"> &#125;</p>
            </div>)

    }
};

export default Output;

