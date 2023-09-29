import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import { approveDnSAdmin, getAllDepositsAdmin, getAllUsersAdmin } from '../../services/adminSlice';
import moment from 'moment';
import numberSeparator from 'number-separator';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import { CircularProgress } from '@mui/material';

const AdminDeposit = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(getAllDepositsAdmin());
    dispatch(getAllUsersAdmin());
  }, [dispatch]);
  const { deposits, isLoading, allUsers } = useSelector((state) => state.admin);
  const [data, setData] = useState({
    _id: 0,
    user_id: 0,
    status: '',
    createdAt: '',
    amount: '',
  });
  const single = allUsers?.find((item) => item._id === data?.user_id);
  function approveDeposit() {
    const id = data._id;
    const user = data.user_id;
    console.log(id)
    dispatch(approveDnSAdmin(id));
  };
  if (isLoading) {
    return <Loader />;
  }
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
                // <Link to={`${item.user_id}_${item.id}`} >
                <tr className='cursor-pointer' key={idx} onClick={() => { setData({_id: item._id, user_id: item.user_id, status: item.status, createdAt: item.createdAt, amount: item.amount }); setOpen(true); }}>
                  <td>${numberSeparator(item.amount, ",")}</td>
                  <td className={`p-1 ${item.status === "pending" ? "bg-red-400" : "bg-lime-400"} rounded-sm text-white`}>{item.status}</td>
                  <td>USDT</td>
                  <td>{moment(item.createdAt).fromNow()}</td>
                </tr>
                // </Link>
              )}
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
      {open && (
        <Modal>
          <div
            className='absolute right-2 border border-black rounded-full p-1 hover:scale-110 cursor-pointer hover:rotate-180 transition'
            onClick={() => setOpen(false)}>
            <FaTimes color='red' />
          </div>
          <div>
            <div className='flex flex-col h-full w-full bg-white p-5 my-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                <img src="" alt="" className=' rounded-md h-[200px] w-full' />
                <div className='flex flex-col font-light'>
                  <span className='py-2'>{single?.firstName} {single?.lastName}</span>
                  <span className='py-2'>${numberSeparator(data?.amount, ",")}</span>
                  <span className='py-2'>{moment(data?.createdAt).fromNow()}</span>
                  <span className={`p-1 ${data?.status === "pending" ? "bg-red-400" : "bg-lime-400"} rounded-sm text-white`}>{data?.status}</span>
                </div>
              </div>
              {data?.status === "pending" && <button className='border flex w-full p-2 bg-neutral-600 text-white font-normal text-center mt-2 rounded' onClick={approveDeposit}>{isLoading ? <CircularProgress /> : "Approve Deposit"}</button>}
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default AdminDeposit