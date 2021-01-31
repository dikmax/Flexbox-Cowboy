import './Navigation.css';
function Navigation() {
  return (
  <nav className="header"> 
    <div className="logo"><p>Pavel<span className="logo-span">VLG</span>4</p></div> 
    <div className="header__conteyner-flex">
      <div className="header__item"><p>language</p></div>
      <div className="header__item"><p>theme</p></div>
    </div> 
  </nav>
  );
}

export default Navigation;
