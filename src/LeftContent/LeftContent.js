import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import './LeftContent.css'

class LeftContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: null
      
    };
  };
   
 
  testLeft = (value) => {
    value = this.state.test
 

    let s =  value;
    let arr = s.substring(0,s.length).trim().split(':');
    let obj = {};
    
    obj[arr[0]]=arr[1];
     
    console.log(obj);
  };
  //  testLeft = () =>{
  //  this.props.setUserText(this.state.test)
  //    let estLeftState = this.state.test
  //    const a = {estLeftState};
  //    console.log(a)
  //  };

  flexChange = (e)=>{
    this.setState({
      test: e.target.value
    });
  };
 
render(){  
  const leftLi = this.props.keyAndValue[1][1].map(function(item) {
    return(<li>{item}</li>)
  });
  
  const befor = Object.keys(this.props.keyAndValue[2]);
  const after = this.props.keyAndValue[2];


  return (
  <div className='content-left' >

    <div className = 'LeftContent-level'>
      <div className ='LeftContent-level-text' ><p>Сменить уровень</p></div>
       <div className ="LeftContent-level-btn" >
        <button className = 'LeftContent-level-down'>Назад</button>
        <button className = 'LeftContent-level-up'>Вперед</button>
      </div>
    </div>

    <div className ='LeftContent-task'><p>{this.props.keyAndValue[0][1]}</p></div>
    <div>
      <ul>
      {leftLi}
      </ul>
    </div>
    <div className ='LeftContent-editor'>

      <pre id='befor'>{befor[0]}</pre>
      <textarea className = "LeftContent-textarea" id='code'
                 defaultValue="justify-content: space-between"
                 onChange={this.flexChange}
                 onSubmit={this.onSubmit}></textarea>
      <pre id='after'>Закрывающая скобка</pre>
    </div>
    <div className ='LeftContent-buttonStart'>
      <button type='button'
              onClick = {this.testLeft}
              className ='LeftContent-buttonStart-button'>   
              'Дорогу осилит идущий'</button>
    </div>
  </div>
  )}};


export default LeftContent;
