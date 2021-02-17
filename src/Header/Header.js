import React from 'react'
import './Header.css';
import Music from "./ugly.mp3"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usePlay: false,
      text: 'Включить атмосферу'
    }
  };

  audio = new Audio(Music)
 
  playMusic = () => {
    this.setState({ usePlay: !this.state.usePlay }, () => {
      if (this.state.usePlay === true) {
        this.setState({
          text: 'Выключить атмосферу'
        })
        this.audio.play()
      } else {
        this.setState({
          text: 'Включить атмосферу'
        })
        this.audio.pause()
      }
    }
   )
  };

  render() {
    const { text } = this.state
    const { playMusic } = this

    return (
      <nav className="header">
        <div className="logo"><p>Pavel<span className="logo-span">VLG</span>4</p></div>
        <div className="header__conteyner-flex">
          <div className="header__item"><p onClick={playMusic} className="header__text">{text}</p></div>
        </div>
      </nav>
    );
  }
};

export default Header;

