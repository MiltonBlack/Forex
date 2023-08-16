import React, { useState } from 'react'
import Footer from '../components/Footer'
import { FaAngleLeft, FaAngleRight, FaMinusSquare, FaPlus, FaCopy, FaRecycle, FaRegFutbol } from 'react-icons/fa'
import Modal from '../components/Modal';

const Fund = () => {
  const [open, setOPen] = useState(false);
  function toggleWallet() {
    setOPen(!open)
  }
  return (
    <>
      <div className='pt-16 bg-stone-100 px-10 h-[80vh] relative z-0'>
        <div className='my-4'>
          <h1 className='text-2xl font-extrabold'>Your Transaction History</h1>
          <span className='font-light text-sm text-slate-600'>Track all your financial data in one place</span>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-2 font-normal '>
          <span className='border text-center p-2 bg-black/75 text-white hover:bg-white hover:text-black flex items-center justify-center shadow-md cursor-pointer hover:shadow-none' onClick={() => { setOPen(true) }}>
            <FaPlus size={30} className='mr-4' />
            Deposit Funds
          </span>
          <span className='border text-center p-2 bg-black/75 text-white hover:bg-white hover:text-black flex items-center justify-center shadow-md cursor-pointer hover:shadow-none'>
            <FaMinusSquare size={30} className='mr-4' />
            Withdraw Funds
          </span>
          <span className='bg-white border flex justify-between items-center p-1 shadow-md hover:shadow-none'>
            <FaRecycle size={30} />
            <div className='flex flex-col px-1'>
              <span className='text-sm'>Deposits History</span>
              <span>None</span>
            </div>
          </span>
          <span className='bg-white border flex justify-between items-center p-1 shadow-md hover:shadow-none'>
            <FaRegFutbol size={30} />
            <div className='flex flex-col px-1'>
              <span className='text-sm'>Withdrawal History</span>
              <span>None</span>
            </div>
          </span>
        </div>
        <div className='flex w-full'></div>
        <div className='border my-4 rounded bg-white shadow-md flex flex-col items-center'>
          <table className='w-full'>
            <thead>
              <tr className='bg-black/75 text-white'>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Type</th>
                <th>Date Started</th>
              </tr>
            </thead>
            <tbody className='font-light text-center'>
              <tr>
                <td>10,000</td>
                <td className='p-1 bg-red-400 rounded-sm text-white'>Pending</td>
                <td>Bitcoin</td>
                <td>5 Days Ago</td>
              </tr>
            </tbody>
          </table>
          <div className='w-[80%] border mt-4'></div>
          <div className='flex w-full justify-between items-center my-4 px-4 '>
            <span className=' font-normal'>Showing 1 of 1 entries</span>
            <div className='flex items-center justify-center'>
              <FaAngleLeft />
              <span className=' bg-stone-700 text-white rounded-full h-7 w-7 flex items-center justify-center mx-4'>1</span>
              <FaAngleRight />
            </div>
          </div>
        </div>
        {open &&
          (
            <Modal>
              <span>Amount</span>
              <div className='flex w-full'>
                <input type="text" className='p-1 bg-stone-300' />
                <button><FaCopy/></button>
              </div>
            </Modal>
          )}
      </div>
      <Footer />
    </>
  )
}

export default Fund