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
import AdminNavBar from './components/AdminNavBar';
import AdminDashHome from './pages/admin/AdminDashHome';
import AdminDeposit from './pages/admin/AdminDeposit';
import AdminWithdrawals from './pages/admin/AdminWithdrawals';
import AdminPendingTransactions from './pages/admin/AdminPendingTransactions';
// import AdminPendingWithdrawals from './pages/admin/AdminPendingWithdrawals';
import AdminUsers from './pages/admin/AdminUsers';
import AdminLogin from './pages/admin/AdminLogin';
import AdminSettings from './pages/admin/AdminSettings';
import CreateAdmin from './pages/admin/CreateAdmin';
import ProtectedAdminRoute from './utils/ProtectedAdminRoute';

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
        <Route exact element={<ProtectedAdminRoute/>}>
          <Route path='auth/admin' element={<AdminNavBar />}>
            <Route index element={<AdminDashHome />} />
            <Route path='deposits' element={<AdminDeposit />} />
            <Route path='withdrawals' element={<AdminWithdrawals />} />
            <Route path='pending' element={<AdminPendingTransactions />} />
            {/* <Route path='pendingwithdraw' element={<AdminPendingWithdrawals/>}/> */}
            <Route path='allusers' element={<AdminUsers />} />
            <Route path='settings' element={<AdminSettings />} />
          </Route>
        </Route>
        <Route path='auth/admin/login' element={<AdminLogin />} />
        <Route path='auth/administration/v1/create/:id' element={<CreateAdmin />} />
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='verify' element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}

export default App;