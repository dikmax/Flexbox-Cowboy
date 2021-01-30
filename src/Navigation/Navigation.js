import './Navigation.css';
function Navigation() {
  return (
  <nav className="header"> 
    <div className="logo"><img src="#" alt="logo"/></div> 
    <div className="header__conteyner-flex">
      <div className="header__item"><p>language</p></div>
      <div className="header__item"><p>theme</p></div>
    </div> 
  </nav>
  );
}

export default Navigation;
