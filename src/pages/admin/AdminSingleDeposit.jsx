import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { approveDnSAdmin, approvePlan, getSingleDepositAdmin } from '../../services/adminSlice';
import moment from 'moment';
import { CircularProgress, Snackbar, Alert, Slide } from '@mui/material';
import numberSeparator from 'number-separator'

const AdminSingleDeposit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleDepositAdmin(id));
  }, [dispatch, id]);
  const { oneDeposit, allUsers, isLoading, success } = useSelector((state) => state.admin);
  const single = allUsers.find((item) => item._id === id);
  const { _id } = oneDeposit;

  async function approveDeposit() {
    await dispatch(approveDnSAdmin(_id));
    await dispatch(approvePlan(_id));
    // await timeOut();
  };
  // function timeOut() {
  //   setTimeout(() => {
      
  //   }, 4000)
  // }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };
  return (
    <div className='pt-16 bg-stone-100 px-5 md:px-10 min-h-[100vh] h-full relative'>
      <Snackbar autoHideDuration={4000} open={success} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='success' >
          {single.email} Deposit Approved Successfully
        </Alert>
      </Snackbar>
      <div className='my-4'>
        <h1 className='text-2xl font-extrabold'>Deposits Transaction History</h1>
        <span className='font-light text-sm text-slate-600'>Track all your Customer's Deposit financial data in one place</span>
      </div>
      <div className='flex flex-col h-full w-full bg-white p-5 shadow-md rounded-md my-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
          <img src="" alt="" className=' rounded-md h-[200px] w-full' />
          <div className='flex flex-col'>
            <span className='py-2'>{single.firstName} {single.lastName}</span>
            <span className='py-2'>${numberSeparator(oneDeposit.amount, ",")}</span>
            <span className='py-2'>{moment(oneDeposit.createdAt).fromNow()}</span>
            <span className={`p-1 ${oneDeposit.status === "pending" ? "bg-red-400" : "bg-lime-400"} rounded-sm text-white`}>{oneDeposit.status}</span>
          </div>
        </div>
        {oneDeposit.status === "pending" && <button className='border flex w-full p-2 bg-neutral-600 text-white font-normal' onClick={approveDeposit}>{isLoading ? <CircularProgress /> : "Approve Deposit"}</button>}
      </div>
    </div>
  )
}

export default AdminSingleDeposit