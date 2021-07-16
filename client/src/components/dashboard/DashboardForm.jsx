import { useState } from 'react';
import '../LoginForm.css';
import axios from 'axios';

function DashboardForm () {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    uid: '',
    date: '',
    profission: ''
  });

  const handleFirstName = (event) => setFormInput({ ...formInput, firstName: event.target.value });
  const handleLastName = (event) => setFormInput({ ...formInput, lastName: event.target.value });
  const handleUID = (event) => setFormInput({ ...formInput, uid: event.target.value });
  const handleDate = (event) => setFormInput({ ...formInput, date: event.target.value });
  const handleProfission = (event) => setFormInput({ ...formInput, profission: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/dashboard', {
      formInput
    })
    .then((response) => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input placeholder='First Name' type='text' className='form-input' onChange={handleFirstName}></input>
      <input placeholder='Last Name' type='text' className='form-input' onChange={handleLastName}></input>
      <input placeholder='UID' type='text' className='form-input' onChange={handleUID}></input>
      <input placeholder='Date of Record' type='Date' className='form-input' onChange={handleDate}></input>
      <input placeholder='Profission' type='text' className='form-input' onChange={handleProfission}></input>
      <button className='form-button'>Submit</button>
    </form>
  );
}

export default DashboardForm;