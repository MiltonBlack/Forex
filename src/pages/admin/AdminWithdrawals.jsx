import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { getAllWithdrawalsAdmin } from '../../services/adminSlice';
import Loader from '../../components/Loader';
import moment from 'moment';
import numberSeparator from 'number-separator'

const AdminWithdrawals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWithdrawalsAdmin());
  }, [dispatch])
  const { withdrawals, isLoading } = useSelector((state) => state.admin);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className='pt-16 bg-stone-100 px-5 md:px-10 min-h-[100vh] h-full'>
      <div className='my-4'>
        <h1 className='text-2xl font-extrabold'>Withdrawals Transaction History</h1>
        <span className='font-light text-sm text-slate-600'>Track all your Customer's Withdrawal financial data in one place</span>
      </div>
      <div className='border my-4 rounded bg-white shadow-md flex flex-col items-center'>
        <table className='w-full'>
          <thead>
            <tr className='bg-black/75 text-white md:text-lg text-sm'>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className='font-light text-center md:text-lg text-base'>
            {withdrawals?.map((itm, idx) =>
              <tr key={idx}>
                <td>{numberSeparator(itm.withdrawAmount, ",")}</td>
                <td className={`p-1 ${itm.status === "pending" ? "bg-red-400" : "bg-lime-400"} rounded-sm text-white`}>{itm.status}</td>
                <td>USDT</td>
                <td>{moment(itm.createdAt).fromNow()}</td>
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
  )
}

export default AdminWithdrawals