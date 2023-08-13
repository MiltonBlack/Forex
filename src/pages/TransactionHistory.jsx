import React from 'react'
import { FaAngleLeft, FaAngleRight, FaBiohazard } from 'react-icons/fa'
import Footer from '../components/Footer'

const TransactionHistory = () => {
  return (
    <>
      <div className='pt-16 bg-stone-100 px-10 h-[80vh]'>
        <div className='my-4'>
          <h1 className='text-2xl font-extrabold'>Your Transaction History</h1>
          <span className='font-light text-sm text-slate-600'>Track all your financial data in one place</span>
        </div>
        <div className='grid grid-cols-2 gap-4 border mt-2 font-normal'>
          <span className='border text-center p-2 bg-black/75 text-white hover:bg-white hover:text-black'>Deposits</span>
          <span className='bg-white border text-center p-2'>Withdrawals</span>
        </div>
        <div className='border my-4 rounded bg-white shadow-md flex flex-col items-center'>
          <table className='w-full'>
            <thead>
              <tr className='bg-black/75 text-white'>
                <th>Subscription Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Type</th>
                <th>Date Started</th>
              </tr>
            </thead>
            <tbody className='font-light text-center'>
              <tr>
                <td>Premium Plan</td>
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
              <FaAngleLeft/>
              <span className=' bg-stone-700 text-white rounded-full h-7 w-7 flex items-center justify-center mx-4'>1</span>
              <FaAngleRight/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default TransactionHistory