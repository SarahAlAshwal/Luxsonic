import { useState } from 'react';
import '../Form.css';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [register, setRegister] = useState(false);
  const[error, setError] = useState('');

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleUsername = (event) => setUsername(event.target.value);
  const buttonText = register ? 'Sign up': 'Sign In';
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    password === '' || email === '' ? setError('Email and Password are required'): setError('');
    if (!error) {
      props.login(email, password);
    }
  }
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    props.register(username, email, password);
  }
  return (
    <div className='form-container'>
      <form className='form-container' onSubmit={register ? handleSubmitRegister: handleSubmitLogin}>
     { register && <input placeholder='username' type='text' className='form-input' onChange={handleUsername}></input>}
      <input placeholder='Email' type='text' className='form-input' onChange={handleEmail}></input>
      <input placeholder='Password' type='password' className='form-input' onChange={handlePassword}></input>
      <button className='form-button'>{buttonText}</button>
    </form>
    {error !== '' && <p className='error'>{error}</p>}
    <button className='register-button' onClick={() => setRegister(true)}>Register</button>
    </div>
  )};

export default LoginForm;