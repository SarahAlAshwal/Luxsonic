
import logo from '../../luxsonicHero.jpg';
import LoginForm from '../loginForm/LoginForm';
import './LanderPage.css'; 

function LanderPage () {
  return (
    <>
      <div id='container'>
        <div>
          <h1>LUXSONIC</h1>
          <h6>Empowering the healthcare industry with immersive solutions</h6>
        </div>
        <LoginForm/>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default LanderPage;
