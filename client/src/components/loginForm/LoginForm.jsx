import { useState } from 'react';
import '../Form.css';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [register, setRegister] = useState(false);

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleUsername = (event) => setUsername(event.target.value);
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    props.login(email, password);
  }
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    props.register(username,email, password);
  }
  return (
    <>
      <form className='form-container' onSubmit={register ? handleSubmitRegister: handleSubmitLogin}>
     { register && <input placeholder='username' type='text' className='form-input' onChange={handleUsername}></input>}
      <input placeholder='Email' type='text' className='form-input' onChange={handleEmail}></input>
      <input placeholder='Password' type='password' className='form-input' onChange={handlePassword}></input>
      <button className='form-button'>Sign In</button>
      <button className='register-button' onClick={() => setRegister(true)}>Register</button>
    </form>
    {props.error !== '' && <p className='error'>{props.error}</p>} 
    </>
  )};

export default LoginForm;