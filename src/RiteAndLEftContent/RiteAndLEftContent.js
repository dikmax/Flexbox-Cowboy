import React from 'react';
import ReactDOM from 'react-dom';
import './RiteAndLeftContent.css';
import RiteContent from '../RiteContent/RiteContent';
import LeftContent from '../LeftContent/LeftContent';

class RiteAndLeftContent extends React.Component{
  constructor(props){
    super(props);
    
    
  };
 render(){
  return (
    <>
        <LeftContent />
        <RiteContent/>
    </>
    );
}};




export default RiteAndLeftContent;