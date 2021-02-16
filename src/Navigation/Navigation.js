import './Navigation.css';
import Music from "./ugly.mp3"

function Navigation() {

  let music = new Audio(Music)

  function playMusic() {
    music.play()
  }
  function stopMusic() {
    music.pause()
  }


  return (
    <nav className="header">
      <div className="logo"><p>Pavel<span className="logo-span">VLG</span>4</p></div>
      <div className="header__conteyner-flex">
        <div className="header__item"><p onClick={playMusic}>Включить атмоссферу</p></div>
        <div className="header__item"><p onClick={stopMusic}>Выключить атмосферу</p></div>
      </div>
    </nav>
  );
}

export default Navigation;
