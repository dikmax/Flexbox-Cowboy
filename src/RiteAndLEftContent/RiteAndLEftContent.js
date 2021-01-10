import React from 'react';
import ReactDOM from 'react-dom';
import './RiteAndLeftContent.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';

class RiteAndLeftContent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
    btn:  <button type="button"
      className="btn  btn-secondary">
        Сквозь тернии к звездам
 </button>
  }};

 
render(){
  return (
    <>
        <LeftContent />
        <RiteContent/>
    </>
    );
} };




export default RiteAndLeftContent;