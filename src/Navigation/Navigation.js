import React from 'react'
import './Navigation.css';
import Music from "./ugly.mp3"




class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usePlay: false,
      text: 'ВКЛючить атмосферу'
    }
  };

  newState = () => {

    this.setState({ usePlay: !this.state.usePlay }, () => {
      if (this.state.usePlay == true) {
        this.setState({
          text: 'ВЫКЛючить атмосферу'
        })
      } else {
        this.setState({
          text: 'ВКЛючить атмосферу'
        })
      }
    })
    this.play()
  };

  play = ({ usePlay } = this.state) => {
    let audio = new Audio(Music);
    if (usePlay === true) {
      audio.play()
    } else {
      audio.pause()
    }
  }


  render() {
    const { text } = this.state
    const { newState } = this
    return (
      <nav className="header">
        <div className="logo"><p>Pavel<span className="logo-span">VLG</span>4</p></div>
        <div className="header__conteyner-flex">
          <div className="header__item"><p onClick={newState}>{text}</p></div>
        </div>
      </nav>
    );
  }
};

export default Navigation;



// function Navigation() {

//   let music = new Audio(Music)

//   function playMusic() {
//     music.play()
//   }
//   function stopMusic() {
//     music.pause()
//   }


//   return (
//     <nav className="header">
//       <div className="logo"><p>Pavel<span className="logo-span">VLG</span>4</p></div>
//       <div className="header__conteyner-flex">
//         <div className="header__item"><p onClick={playMusic}>Включить атмоссферу</p></div>
//         <div className="header__item"><p onClick={stopMusic}>Выключить атмосферу</p></div>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;
