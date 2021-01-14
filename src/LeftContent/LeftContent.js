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

    <div>
      <div><p>Сменить уровень</p></div>
      <div><button>Назад</button><button>Вперед</button></div>
    </div>

    <div className="left-task"><p>Здесь мы описываем задачу</p></div>
    <div>
      <ul>
       <li >Ferst</li>
       <li >Second</li>
       <li >Three</li>
      </ul>
    </div>
    <div className="editor">

      <pre id="befor"> Odin</pre>
      <textarea  id="code"
                 defaultValue="поле ввода"
                 onChange={this.flexChange}
                 onSubmit={this.onSubmit}></textarea>
      <pre id="after">Viva Loviva</pre>
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
