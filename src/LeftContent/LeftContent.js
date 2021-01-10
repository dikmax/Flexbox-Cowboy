import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App'
import './LeftContent.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';

class LeftContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: 'TEST TEXTAREA'
    };
  };
 

  flexChange = (e) =>{
    this.setState({
      test: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

  };


  render(){
  return (
  <div className="content-left" >
    <div><p>Здесь мы описываем задачу</p></div>
    <div>
      <ul>
       <li>{this.state.test}</li>
       <li></li>
       <li>Окунь</li>
       <li>Описание элементов 3</li>
       <li>Описание элементов 4</li>
      </ul>
    </div>
    <div className="editor">
      <pre id="befor"> Начало задачи: скобки открываются </pre>

      <textarea  id="code"
                 defaultValue="поле ввода"
                 onChange={this.flexChange}
                 onSubmit={this.onSubmit}></textarea>
              
      <pre id="after">скобки закрываются</pre>
    </div>
    <div className="content-left-button">
      //не получается выровнять по правому краю.
      <button type="button"
      className="btn  btn-secondary">
     'Сквозь тернии к звездам'
       </button>
    </div>
  </div>
  )}};


export default LeftContent;
