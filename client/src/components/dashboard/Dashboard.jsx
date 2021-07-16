import axios from 'axios';
import { useState } from 'react';
import DashboardForm from './DashboardForm';
import './Dashboard.css'
import Header from './Header';
import Record from './Record';

function Dashboard (props) {
  const [records, setRecords] = useState([]);
  const display = async() => {
    axios.get('http://localhost:5000/dashboard')
    .then(function (response) {
    setRecords(response.data);
    console.log(records);
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  const recordsFields = records.map(record => 
    <Record
      key={record.form_id} 
      firstName={record.firstname}
      lastName={record.lastname} 
      uid={record.form_uid} 
      date={record.form_date}
      profission={record.profission}/>
    )
  return (
    <>
      <Header display={display} />
      <div id='dashboard-container'>
        <h2>{`Welcome ${props.name}`}</h2>
        <DashboardForm/>
        {recordsFields}
      </div>
    </>
  );
}

export default Dashboard;