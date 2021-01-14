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

  testLeft = () =>{
    console.log(this.props.map[1][1])
  };




  render(){  

  const leftLi = this.props.map[1][1].map(function(item) {
    return(<li>{item}</li>)
  });
  
  return (
  <div className="content-left" >

    <div>
      <div><p>Сменить уровень</p></div>
      <div><button  >Назад</button><button>Вперед</button></div>
    </div>

    <div className="left-task"><p>{this.props.map[0][1]}</p></div>
    <div>
      <ul>
      {leftLi}
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
              onClick = {()=>{this.props.map[1][1].forEach(alert);}}
              className ="btn  btn-secondary">   
            'Дорогу осилит идущий' </button>
    </div>
  </div>
  )}};


export default LeftContent;
