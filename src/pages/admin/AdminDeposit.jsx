import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { getAllDepositsAdmin } from '../../services/adminSlice';
import moment from 'moment';
import Loader from '../../components/Loader';

const AdminDeposit = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllDepositsAdmin());
  },[dispatch]);
  const { deposits, isLoading } = useSelector((state) => state.admin);
  if (isLoading) {
    return <Loader />;
  }
  console.log(deposits);
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 min-h-[100vh] h-full'>
        <div className='my-4'>
          <h1 className='text-2xl font-extrabold'>Deposits Transaction History</h1>
          <span className='font-light text-sm text-slate-600'>Track all your Customer's Deposit financial data in one place</span>
        </div>
        <div className='border my-4 rounded bg-white shadow-md flex flex-col items-center'>
          <table className='w-full'>
            <thead>
              <tr className='bg-black/75 text-white md:text-lg text-sm'>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Type</th>
                <th>Date Deposited</th>
              </tr>
            </thead>
            <tbody className='font-light text-center md:text-lg text-base'>
              {deposits?.map((item, idx) => 
               <tr key={idx}>
                <td>{item.amount}</td>
                <td className={`p-1 ${item.status === "pending" ? "bg-red-400" : "bg-lime-400"} rounded-sm text-white`}>{item.status}</td>
                <td>USDT</td>
                <td>{moment(item.createdAt).fromNow}</td>
              </tr>)}
            </tbody>
          </table>
          <div className='w-[80%] border mt-4'></div>
          <div className='flex w-full justify-between items-center my-4 px-4 md:text-lg text-base'>
            <span className=' font-normal'>Showing 1 of 1 entries</span>
            <div className='flex items-center justify-center'>
              <FaAngleLeft />
              <span className=' bg-stone-700 text-white rounded-full h-7 w-7 flex items-center justify-center mx-4'>1</span>
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDeposit