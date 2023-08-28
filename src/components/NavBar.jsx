import React, { useState, useEffect } from 'react'
import { logout } from '../services/authSlice'
import { FaArrowCircleDown, FaBarcode, FaBell, FaCog, FaDoorOpen, FaPalette, FaQuestionCircle } from 'react-icons/fa'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux'

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <div className='flex w-screen items-center justify-between px-4 py-2 font-thin fixed bg-white z-50 shadow-md'>
        <FaBarcode />
        <div className='flex'>
          <NavLink to='/dashboard' className='flex items-center mr-3 font-bold border-b-2 border-black cursor-pointer'>Overview</NavLink>
          <NavLink to='transactionHistory' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'>History</NavLink>
          <NavLink to='wallet' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'>Wallet</NavLink>
          <NavLink to='swap' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'>Swap</NavLink>
          <NavLink to='plans' className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'><FaPalette /> Trading Plans</NavLink>
          <NavLink to='help' className='flex items-center hover:border border-black px-1 cursor-pointer'><FaQuestionCircle /><h1>Help</h1></NavLink>
        </div>
        <div className='flex items-center justify-center relative'>
          <FaBell />
          {/* <div className='mx-2 bg-stone-700 h-6 w-6 rounded-full'>
            <img src="" alt="" />
          </div> */}
          <h1 className='mx-2'>{user.firstName} {user.lastName}</h1>
          <FaArrowCircleDown onClick={toggleMenu} className='cursor-pointer'/>
          {open &&
            (<div className='absolute right-0 top-8 bg-black/50 w-[120px] text-base font-normal text-white'>
              <div className='p-2'>
                <span className='text-xs'>
                  Logged in as:
                </span>
                <span className='ml-1 text-sm flex'>{user.firstName} {user.lastName}</span>
                <Link to='/dashboard/profile' className='border border-black w-full flex my-1 items-center justify-center'>View Profile</Link>
                <Link to='/dashboard/settings' className='flex border-black items-center justify-center border w-full'>Settings <FaCog className='mx-2' /></Link>
                <div className='flex border-black items-center justify-center border w-full cursor-pointer' onClick={Logout}>Logout <FaDoorOpen className='mx-2' /></div>
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