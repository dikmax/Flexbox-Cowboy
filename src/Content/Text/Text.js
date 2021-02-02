import React from 'react';

import '../Text/Text.css'
import HeaderText from '../Element/HeaderText'
import ButtonText from '../Element/ButtonText'
import InfoLevel from '../Element/InfoLevel'
import Pre from '../Element/Pre'
import StartButton from '../Element/StartButton'





class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  };


  test = (inpt) => {
    // вывожу от пользователя и передаю в state
   
   this.setState({ data: inpt })
    
    // измеить текст
    // передать в стейт
    // из стейта в стили

  }
  test2 = () =>{
    console.log(this.state.data)
  }


  render() {
    return (
      <div className="text-conteiner">
        <HeaderText />
        <ButtonText />
        <InfoLevel />
        <Pre test={this.test} />
        <StartButton test ={this.test2}/>
      </div>
    );
  }
};

export default Text;

