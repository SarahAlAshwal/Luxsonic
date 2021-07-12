import logo from './luxsonicHero.jpg';
import './App.css';
import LoginForm from './components/loginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <div id='form-container'>
        <div>
          <h1>LUXSONIC</h1>
          <h6>Empowering the healthcare industry with immersive solutions</h6>
        </div>
        <LoginForm/>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
