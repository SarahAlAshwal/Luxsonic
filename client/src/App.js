import './App.css';
import LanderPage from './components/landerPage/LanderPage';
import Dashboard from './components/dashboard/Dashboard';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const[error, setError] = useState('');
  const [user, setUser] = useState('');
  const [auth, setAuth] = useState(false);

  function getUsername() {
    axios.get('http://localhost:5000/user/', {
      headers: { jwt_token: localStorage.token }
    })
    .then(response => {
      console.log('user', response.data);
      setUser(response.data.username);
    })
  }

  function handleLogin (email, password) {
    axios.post('http://localhost:5000/user/login', {
      email: email,
      password: password
    })
    .then((response) => {
      response.data ? setShow(true) : setError('Incorrect email or password ');
      getUsername();
      if(response.data.jwtToken) {
        localStorage.setItem('token', response.data.jwtToken);
        setAuth(true);
      }
    })
    .catch((error) => console.log(error))
  }  

  function handleRegister (username, email, password) {
    axios.post('http://localhost:5000/user/register', {
      username: username,
      email: email,
      password: password
    })
    .then((response) => {
      getUsername();
      setShow(true);
      if(response.data.jwtToken) {
        localStorage.setItem('token', response.data.jwtToken);
        setAuth(true);
      }
    })
    .catch((error) => console.log(error))
  }  

  return (
    <div className="App">
      {!show && <LanderPage register={handleRegister} login ={handleLogin} error={error}/>}
      
      { show && <Dashboard name={user}/>}
    </div>
  );
}

export default App;
