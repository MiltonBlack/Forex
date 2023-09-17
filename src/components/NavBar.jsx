import React, { useState, useEffect } from 'react'
import { logout } from '../services/authSlice'
import { FaArrowCircleDown, FaBarcode, FaBars, FaBell, FaCog, FaDoorOpen, FaHistory, FaPowerOff, FaQuestionCircle, FaTimes, FaUpload } from 'react-icons/fa'
import { GrOverview } from 'react-icons/gr'
import { GiSettingsKnobs, GiTrade, GiWallet } from 'react-icons/gi'
import { BiUserCircle } from 'react-icons/bi'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Navbar.css'

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navBar, setNavBar] = useState(false);
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  const User = localStorage.getItem("user");
  useEffect(() => {
    if (!User) {
      navigate('/')
    }
  }, [User])

  function Logout() {
    dispatch(logout());
  };
  console.log(User);
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <div className='md:flex md:w-screen md:items-center md:justify-between md:px-4 md:py-2 md:font-thin fixed bg-white z-50 shadow-md'>
        <FaBarcode className='hidden md:flex' />
        <FaBars className='md:hidden flex m-4 cursor-pointer transition' onClick={() => { setNavBar(true) }} />
        {navBar &&
          (<div className='fixed left-0 top-0 bottom-0 h-screen w-screen bg-slate-700/25 md:hidden flex'>
            <div className='w-[70%] bg-white border-r-0 rounded-r-lg shadow-md shadow-black relative'>
              <div className='absolute right-2 top-2 border border-black rounded-full p-1 hover:scale-125 cursor-pointer shadow-lg shadow-rose-700 transition' onClick={() => { setNavBar(false) }}>
                <FaTimes color='red' size={26} />
              </div>
              <div className='flex flex-col items-start justify-between h-full py-20 pl-20 font-normal'>
                <NavLink to='/dashboard' className='flex items-center text-xl font-bold border-black cursor-pointer  active:rounded'><GrOverview className='mr-3'/> Overview</NavLink>
                <NavLink to='/dashboard/transactionHistory' className='flex items-center text-xl hover:border border-black px-1 cursor-pointer '><FaHistory className='mr-3'/> History</NavLink>
                <NavLink to='/dashboard/wallet' className='flex items-center hover:border border-black px-1 cursor-pointer '><GiWallet className='mr-3'/> Wallet</NavLink>
                <NavLink to='/dashboard/swap' className='flex items-center hover:border border-black px-1 cursor-pointer '><GrSend className='mr-3'/> Swap</NavLink>
                <NavLink to='/dashboard/plans' className='flex items-center hover:border border-black px-1 cursor-pointer '><GiTrade className='mr-3'/> Trading Plans</NavLink>
                <NavLink to='/dashboard/ROI' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer '><FaUpload className='mr-3'/> ROI</NavLink>
                <NavLink to='/dashboard/profile' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'><BiUserCircle className='mr-3'/> Profile</NavLink>
                <NavLink to='/dashboard/settings' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'><GiSettingsKnobs className='mr-3'/> Settings</NavLink>
                <NavLink to='/dashboard/help' className='flex items-center hover:border border-black px-1 cursor-pointer'>
                  <FaQuestionCircle className='mr-3'/>
                  <h1 className='ml-2'>Help</h1>
                </NavLink>
                <button className='flex items-center border rounded bg-slate-500 p-1 text-white' onClick={Logout}>Logout <FaPowerOff className='ml-2'/></button>
              </div>
            </div>
          </div>)}
        <div className='hidden md:flex'>
          <NavLink to='/dashboard' className='flex items-center mr-1 md:mr-3 text-base md:text-xl md:font-bold cursor-pointer'>Overview</NavLink>
          <NavLink to='/dashboard/transactionHistory/deposits' className='flex items-center mr-1 md:mr-3 text-base md:text-xl border-black px-1 cursor-pointer '>History</NavLink>
          <NavLink to='/dashboard/wallet' className='flex items-center mr-3 border-black px-1 cursor-pointer '>Wallet</NavLink>
          <NavLink to='/dashboard/swap' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer '>Swap</NavLink>
          <NavLink to='/dashboard/ROI' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer '>ROI</NavLink>
          <NavLink to='/dashboard/plans' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer '> Trading Plans</NavLink>
          <NavLink to='/dashboard/help' className='flex items-center hover:border border-black px-1 cursor-pointer '><FaQuestionCircle /><h1>Help</h1></NavLink>
        </div>
        <div className='flex items-center justify-center relative'>
          <FaBell className='hidden md:flex' />
          <h1 className='mx-2 hidden md:flex'>{user.firstName} {user.lastName}</h1>
          <FaArrowCircleDown onClick={toggleMenu} className='cursor-pointer hidden md:flex' />
          {open &&
            (<div className='absolute right-0 top-8 bg-black/50 w-[120px] text-base font-normal text-white'>
              <div className='p-2'>
                <span className='text-xs'>
                  Logged in as:
                </span>
                <span className='ml-1 text-sm flex'>{user.firstName} {user.lastName}</span>
                <Link to='/dashboard/profile' className='border border-black w-full flex my-1 items-center justify-center'>View Profile</Link>
                <Link to='/dashboard/settings' className='flex border-black items-center justify-center border w-full'>Settings <FaCog className='mx-2' /></Link>
                <div 
                className='flex border-black items-center justify-center border w-full cursor-pointer' onClick={Logout}>
                  Logout 
                  <FaDoorOpen className='mx-2' />
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className='w-full h-full'>
        <Outlet />
      </div>
    </>
  )
}

export default NavBar