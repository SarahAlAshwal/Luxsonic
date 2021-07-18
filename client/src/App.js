import './App.css';
import LanderPage from './components/landerPage/LanderPage';
import Dashboard from './components/dashboard/Dashboard';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const[error, setError] = useState('');
  const [user, setUser] = useState('');

  function handleLogin (email, password) {
    axios.post('http://localhost:5000/user/login', {
      email: email,
      password: password
    })
    .then((response) => {
      response.data ? setShow(true) : setError('Incorrect email or password ');
      setUser(response.data.username);
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
      setShow(true);
      setUser(response.data.name);
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
