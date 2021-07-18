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
    axios.get('/dashboard')
    .then( response => {
    setRecords(response.data);
    setShowRecords(true);
    })
    .catch(error => console.log(error))
  };
  
  const saveRecords = async() => {
    axios.get('/dashboard')
    .then( response => {
      const csvData = response.data.map(record => {
        const temp = [];
        temp.push(record.firstname);
        temp.push(record.lastname);
        temp.push(record.form_uid);
        temp.push(record.form_date);
        temp.push(record.profission);
        return temp;
      });
      const element= document.createElement('a');
      const file = new Blob([csvData], {
        type:  "data:text/csv;charset=utf-8,"
      });
      element.href = URL.createObjectURL(file);
      element.download = 'Records.csv';
      document.body.appendChild(element);
      element.click();
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
      <Header display={display} hide={() => setShowRecords(false)} save={saveRecords} />
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