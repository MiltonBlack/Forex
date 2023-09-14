import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleDepositAdmin } from '../../services/adminSlice';
import moment from 'moment';

const AdminSingleDeposit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSingleDepositAdmin(id));
  },[dispatch]);
  const { oneDeposit, allUsers } = useSelector((state) => state.admin);
  const single = allUsers.find((item)=> item._id === id);
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
            <span>{single.firstName} {single.lastName}</span>
            <span>${oneDeposit.amount}</span>
            <span>{moment(oneDeposit.createdAt).fromNow}</span>
            <span>{oneDeposit.status}</span>
          </div>
        </div>
        {oneDeposit.status === "pending" && <button className='border flex w-full p-2 bg-neutral-600 text-white font-normal'>Approve Deposit</button>}
      </div>
    </div>
  )
}

export default AdminSingleDeposit