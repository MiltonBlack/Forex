import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import DashHome from './pages/DashHome'
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
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Personnal from './components/Personnal';
import Security from './components/Security';
import Account from './components/Account';
import Notifications from './components/Notifications';
import PrivateRoute from './utils/ProtectedRoute';
import VerifyEmail from './pages/VerifyEmail'

function App() {
  return (
    <div className="font-bold">
      <Routes>
        <Route exact element={<PrivateRoute />}>
          <Route path='/dashboard' element={<NavBar />}>
            <Route index element={<DashHome />} />
            <Route path='plans' element={<Invest />} />
            <Route path='ROI' element={<Profit />} />
            <Route path='transactionHistory' element={<TransactionHistory />} >
              <Route path='deposits' element={<DepositsHistory />} />
              <Route path='withdrawals' element={<WithdrawHistory />} />
            </Route>
            <Route path='wallet' element={<Fund />} />
            <Route path='subscriptions' element={<Subscription />} />
            <Route path='swap' element={<CryptoX />} />
            <Route path='help' element={<Help />} />
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} >
              <Route index element={<Personnal />} />
              <Route path='security' element={<Security />} />
              <Route path='account' element={<Account />} />
              <Route path='notifications' element={<Notifications />} />
            </Route>
          </Route>
        </Route>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='verify' element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}

export default App;
