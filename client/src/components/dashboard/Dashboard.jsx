import DashboardForm from './DashboardForm';
import './Dashboard.css'
import Header from './Header';

function Dashboard (props) {
  return (
    <>
    <Header/>
    <div id='dashboard-container'>
    <h2>{`Welcome ${props.name}`}</h2>
    <DashboardForm/>
    </div>
    </>
  );
}

export default Dashboard;