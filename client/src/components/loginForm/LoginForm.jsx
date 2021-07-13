import { useState } from 'react';
import '../LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username,password)
  }
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input placeholder='Username' type='text' className='form-input' onChange={handleUsername}></input>
      <input placeholder='Password' type='password' className='form-input' onChange={handlePassword}></input>
      <button className='form-button'>Sign In</button>
    </form>
  )};

export default LoginForm;