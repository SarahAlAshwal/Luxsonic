
import hero from '../../luxsonicHero.jpg';
import LoginForm from '../loginForm/LoginForm';
import './LanderPage.css'; 

function LanderPage (props) {
  return (
    <>
      <div id='container'>
        <div>
          <h1>LUXSONIC</h1>
          <h6>Empowering the healthcare industry with immersive solutions</h6>
        </div>
        <LoginForm login ={props.login} error={props.error}/>
      </div>
      <img src={hero} className="App-hero" alt="hero" />
    </>
  );
}

export default LanderPage;
