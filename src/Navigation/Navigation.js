import './Navigation.css';
function Navigation() {
  return (
      <div className="header">
        <div className="header_navigation">
            <div className="header_navigation_logo"><h1>Cowboy</h1></div>
            <div className="header_navigation_menu"><h2 className="header_navigation_element">language</h2></div>
            <div className="header_navigation_menu"><h2 className="header_navigation_element">difficalty</h2></div>
        </div>
    </div>
  );
}

export default Navigation;
