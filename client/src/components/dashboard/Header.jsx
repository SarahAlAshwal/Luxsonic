import logo from '../../Luxsonic.png';

function Header (props) {

  return (
    <div id='header'>
      <img className='app-logo' src={logo} alt="logo" />
      <div id='buttons-container'>
        <button className='header-button' onClick={props.display} >Display Records</button>
        <button className='header-button' onClick={props.hide} >Hide Records</button>
        <button className='header-button' >Save Records</button>
      </div>
    </div>
  )};

  export default Header;
