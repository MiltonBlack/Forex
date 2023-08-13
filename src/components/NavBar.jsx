import React, { useState } from 'react'
import { FaArrowCircleDown, FaBarcode, FaBell, FaCog, FaPalette, FaQuestionCircle } from 'react-icons/fa'

const NavBar = () => {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <div className='flex w-screen items-center justify-between px-4 py-2 font-thin fixed bg-white shadow-md'>
      <FaBarcode />
      <div className='flex'>
        <div className='flex items-center mr-3 font-bold border-b-2 border-black cursor-pointer'>Overview</div>
        <div className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'>History</div>
        <div className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'>Fund Wallet</div>
        <div className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'>Withdraw</div>
        <div className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'>Subscriptions</div>
        <div className='flex items-center mr-3 hover:border border-black px-1 cursor-pointer'><FaPalette /> Trading Plans</div>
        <div className='flex items-center hover:border border-black px-1 cursor-pointer'><FaQuestionCircle /><h1>Help</h1></div>
      </div>
      <div className='flex items-center justify-center relative'>
        <FaBell />
        <div className='mx-2 bg-stone-700 h-6 w-6 rounded-full'>
          <img src="" alt="" />
        </div>
        <h1 className='mx-2'>Milton Azibapu</h1>
        <FaArrowCircleDown onClick={toggleMenu} />
        {open &&
          (<div className='absolute right-0 top-8 bg-black/50 w-[120px] text-base font-normal text-white'>
            <div className='p-2'>
              <span className='text-xs'>
                Logged in as:
              </span>
              <span className='ml-1 text-sm flex'>Milton Azibapu</span>
              <span className='border border-black w-full flex my-1 items-center justify-center'>View Profile</span>
              <span className='flex border-black items-center justify-center border w-full'>Settings <FaCog className='mx-2' /></span>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default NavBar