import './App.css';
import LanderPage from './components/landerPage/LanderPage';
import Dashboard from './components/dashboard/Dashboard';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('');
  const [auth, setAuth] = useState(false);

  function getUsername() {
    axios.get('http://localhost:5000/user/', {
      headers: { jwt_token: localStorage.token }
    })
    .then(response => {
      setUser(response.data.username);
      setShow(true);
  });
}

  function handleLogin (email, password) {
      axios.post('http://localhost:5000/user/login', {
      email: email,
      password: password
    })
    .then((response) => {
      if(response.data.jwtToken) {
        localStorage.setItem('token', response.data.jwtToken);
        setAuth(true);
        getUsername();

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
      if(response.data.jwtToken) {
        localStorage.setItem('token', response.data.jwtToken);
        setAuth(true);
        getUsername();
      }
    })
    .catch((error) => console.log(error))
  }  

  function logout() {
    setAuth(false);
    setShow(false);
    localStorage.setItem('token', null);
  }

  return (
    <div className="App">
      {!show && <LanderPage register={handleRegister} login ={handleLogin}/>}
      
      { show && <Dashboard name={user} logout={logout}/>}
    </div>
  );
}

export default App;
