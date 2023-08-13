import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import DashHome from './pages/DashHome'
import SideBar from './components/SideBar';
import Landing from './pages/Landing'
import NavBar from './components/NavBar';
import Invest from './pages/Invest';
import TransactionHistory from './pages/TransactionHistory';
import Profit from './pages/Profit';
import Fund from './pages/Fund';

function App() {
  return (
    <div className="font-bold">
      <NavBar/>
      {/* <Login/> */}
      {/* <SignUp/> */}
      <DashHome/>
      {/* <SideBar/> */}
      {/* <Landing/> */}
      {/* <Invest/> */}
      {/* <TransactionHistory/> */}
      {/* <Profit/> */}
      {/* <Fund/> */}
    </div>
  );
}

export default App;
