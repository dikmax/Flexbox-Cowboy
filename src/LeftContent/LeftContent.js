import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App'
import './LeftContent.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';

class LeftContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: 'left'
    };
  };
 
  flexChange = (e) =>{
    this.setState({
      test: e.target.value
    });
  };
  
  render(){  
   
  return (
  <div className="content-left" >
    <div><p>Здесь мы описываем задачу</p></div>
    <div>
      <ul>
       <li >{this.state.test}</li>
       <li >{this.props.before}</li>
       <li >{this.props.after}</li>
       <li ></li>
       <li ></li>
      </ul>
    </div>
    <div className="editor">

      <pre id="befor"> {this.props.before}</pre>
      <textarea  id="code"
                 defaultValue="поле ввода"
                 onChange={this.flexChange}
                 onSubmit={this.onSubmit}></textarea>
      <pre id="after">{this.props.after}</pre>
    </div>
    <div className="content-left-button">
      <button type="button"
              onClick = {()=>this.props.inputLeftValue(this.state.test)}
              className ="btn  btn-secondary">   
            'Дорогу осилит идущий' </button>
    </div>
  </div>
  )}};


export default LeftContent;
