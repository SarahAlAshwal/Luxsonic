import DashboardForm from './DashboardForm';
import './Dashboard.css'

function Dashboard (props) {
  return (
    <div id='dashboard-container'>
    <h2>{`Welcom ${props.name}` }</h2>
    <DashboardForm/>
    </div>
  );
}

export default Dashboard;