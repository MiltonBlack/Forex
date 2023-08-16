import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
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
import Help from './pages/Help';
import Subscription from './pages/Subscription';
import CryptoX from './pages/CryptoX';
import DepositsHistory from './pages/DepositsHistory';
import WithdrawHistory from './pages/WithdrawHistory';

function App() {
  return (
    <div className="font-bold">
      <Routes>
        <Route path='/dashboard' element={<NavBar />}>
            <Route index element={<DashHome />} />
            <Route path='plans' element={<Invest />} />
            <Route path='ROI' element={<Profit />} />
            <Route path='transactionHistory' element={<TransactionHistory />} >
              <Route path='deposits' element={<DepositsHistory/>}/>
              <Route path='withdrawals' element={<WithdrawHistory/>}/>
            </Route>
            <Route path='wallet' element={<Fund />} />
            <Route path='subscriptions' element={<Subscription />} />
            <Route path='swap' element={<CryptoX />} />
            <Route path='help' element={<Help />} />
        </Route>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      {/* <Login/> */}
      {/* <SignUp/> */}
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
