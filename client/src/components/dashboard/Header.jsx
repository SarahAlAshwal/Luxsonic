import logo from '../../Luxsonic.png';
import axios from 'axios';

function Header () {
  const display = async() => {
    axios.get('http://localhost:5000/dashboard')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  };
  
  return (
    <div id='header'>
      <img className='app-logo' src={logo} alt="logo" />
      <div id='buttons-container'>
        <button className='header-button' onClick={display} >Display Records</button>
        <button className='header-button' >Save Records</button>
      </div>
    </div>
  )};

  export default Header;
