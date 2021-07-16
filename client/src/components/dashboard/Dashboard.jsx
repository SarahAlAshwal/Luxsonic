import axios from 'axios';
import { useState } from 'react';
import DashboardForm from './DashboardForm';
import './Dashboard.css'
import Header from './Header';
import Record from './Record';

function Dashboard (props) {
  const [records, setRecords] = useState([]);
  const [showRecords, setShowRecords] = useState(false);

  const display = async() => {
    axios.get('http://localhost:5000/dashboard')
    .then( response => {
    setRecords(response.data);
    setShowRecords(true);
    })
    .catch(error => console.log(error))
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
      <Header display={display} hide={() => setShowRecords(false)} />
      <div id='dashboard-container'>
        <h2>{`Welcome ${props.name}`}</h2>
        <DashboardForm/>
         {showRecords && <div id='display-records-container'>
          <div className='table-header'>
            <span className='header'>First Name</span>
            <span className='header'>Last Name</span>
            <span className='header'>UID</span>
            <span className='header'>Date</span>
            <span className='header'>Profission</span>
          </div>
          {recordsFields}
        </div>}
      </div>
    </>
  );
}

export default Dashboard;