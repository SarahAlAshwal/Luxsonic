import { useState } from 'react';
import '../Form.css';

function LoginForm(props) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(email, password);
  }
  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
      <input placeholder='Email' type='text' className='form-input' onChange={handleEmail}></input>
      <input placeholder='Password' type='password' className='form-input' onChange={handlePassword}></input>
      <button className='form-button'>Sign In</button>
    </form>
    {props.error !== '' && <p className='error'>{props.error}</p>} 
    </>
  )};

export default LoginForm;