import './App.css';
import LanderPage from './components/landerPage/LanderPage';
import Dashboard from './components/dashboard/Dashboard';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const[error, setError] = useState('');

  function handleLogin (username, password) {
    axios.post('http://localhost:5000/user', {
      username: username,
      password: password
    })
    .then((response) => response.data ? setShow(true) : setError('Incorrect username or password '))
    .catch((error) => console.log(error))
  }  

  return (
    <div className="App">
      {!show && <LanderPage login ={handleLogin} error={error}/>}
      
      { show && <Dashboard name='Sarah'/>}
    </div>
  );
}

export default App;
