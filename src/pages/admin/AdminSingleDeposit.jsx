import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AdminSingleDeposit = () => {
  const { id } = useParams();
  const { deposits } = useSelector((state) => state.admin);
  const deposit = deposits.find((item)=> item._id === id);
  console.log(deposit);
  return (
    <div className='pt-16 bg-stone-100 px-5 md:px-10 min-h-[100vh] h-full'>
      <div className='my-4'>
        <h1 className='text-2xl font-extrabold'>Deposits Transaction History</h1>
        <span className='font-light text-sm text-slate-600'>Track all your Customer's Deposit financial data in one place</span>
      </div>
      <div className='flex flex-col h-full w-full bg-white p-5 shadow-md rounded-md my-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
          <img src="" alt="" className=' rounded-md h-[200px] w-full' />
          <div>
            <span>Azibapu Milton</span>
            <span>$10,000</span>
            <span>5 Days Ago</span>
            <span>Approved</span>
          </div>
        </div>
        <button className='border flex w-full p-2 bg-neutral-600 text-white font-normal'>Approve Deposit</button>
      </div>
    </div>
  )
}

export default AdminSingleDeposit