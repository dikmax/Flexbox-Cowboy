import './App.css';
import Navigation from '../Navigation/Navigation'
function App() {
  return (
    <div>
      <Navigation/>
      <div className="content_left">
        <div>Контент слева</div>
      </div>
      <div className="content_rite">
        <div>Гриид</div>
      </div>
      <div className="footer"><div>Подвал</div></div>
    </div>
  );
}

export default App;
