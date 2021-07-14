import './App.css';
import LanderPage from './components/landerPage/LanderPage';
import Dashboard from './components/dashboard/Dashboard';

const show = false;
function App() {
  return (
    <div className="App">
      {!show && <LanderPage/>}
      { show && <Dashboard name='Sarah'/>}
    </div>
  );
}

export default App;
