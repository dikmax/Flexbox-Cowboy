import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App'
import './LeftContent.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';

class LeftContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: '',
      keyAndValue: '',
    };
  };

  testLeft = () =>{
    this.props.setUserText(this.state.test)
     let q = this.state.test
    const a = {q};
    console.log(a)
    console.log(this.state.test)
  };

  flexChange=(e)=>{
    this.setState({
      test: e.target.value
    });
    console.log('ok')
  };
 
render(){  
  const leftLi = this.props.keyAndValue[1][1].map(function(item) {
    return(<li>{item}</li>)
  });
  
  const befor = Object.keys(this.props.keyAndValue[2]);
  const after = this.props.keyAndValue[2];


  return (
  <div className="content-left" >

    <div>
      <div><p>Сменить уровень</p></div>
       <div>
        <button>Назад</button>
        <button>Вперед</button>
      </div>
    </div>

    <div className="left-task"><p>{this.props.keyAndValue[0][1]}</p></div>
    <div>
      <ul>
      {leftLi}
      </ul>
    </div>
    <div className="editor">

      <pre id="befor">{befor[0]}</pre>
      <textarea  id="code"
                 defaultValue="color: red"
                 onChange={this.flexChange}
                 onSubmit={this.onSubmit}></textarea>
      <pre id="after">Закрывающая скобка</pre>
    </div>
    <div className="content-left-button">
      <button type="button"
              onClick = {this.testLeft}
              className ="btn  btn-secondary">   
              'Дорогу осилит идущий'</button>
    </div>
  </div>
  )}};


export default LeftContent;
