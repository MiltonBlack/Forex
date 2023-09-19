import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleteUserAdmin, getAllUsersAdmin } from '../../services/adminSlice';
import moment from 'moment';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import { Snackbar, Alert, Slide, CircularProgress } from '@mui/material';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, deleted } = useSelector((state) => state.admin);
  const [deleteData, setDeleteData] = useState(false);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    dispatch(getAllUsersAdmin());
  }, [dispatch]);
  function DeleteUser() {
    // Send a delete request to the server
    // for now log to the console 'deleted'
    const id = userData?._id;
    console.log('deleted');
    dispatch(deleteUserAdmin(id));
  }
  if (isLoading) {
    return <Loader />;
  };
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 min-h-[100vh] h-full relative'>
        <Snackbar autoHideDuration={5000} open={deleted} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert sx={{ width: '100%' }} severity='success' >
            User Deleted Successfully
          </Alert>
        </Snackbar>
        <div className='my-4'>
          <h1 className='text-2xl font-extrabold'>All Users</h1>
          <span className='font-light text-sm text-slate-600'>Track all your user Records in one place</span>
        </div>
        <div className='border my-4 rounded bg-white shadow-md flex flex-col items-center'>
          <table className='w-full'>
            <thead>
              <tr className='bg-black/75 text-white md:text-lg text-sm'>
                <th>Full Name</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className='font-light text-center md:text-lg text-base'>
              {allUsers.map((item, idx) =>
                <tr key={idx}>
                  <td>{item.firstName} {item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.investment}</td>
                  <td className='p-1 bg-red-400 rounded-sm text-white'>{item.emailVerified}</td>
                  <td>{moment(item.createdAt).fromNow()}</td>
                  <td className=' bg-red-300'><MdDelete color='red' onClick={() => { setDeleteData(true); setUserData(item); }} /></td>
                </tr>
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
      {deleteData && (
        <Modal>
          <h1>Delete User with the following id: {userData._id}</h1>
          <span>{userData.firstName} {userData.lastName}</span>
          <button className='my-2 bg-red-500 text-white rounded-sm' onClick={DeleteUser}>{!deleted ? "Confirm User Delete!" : <CircularProgress />}</button>
        </Modal>
      )
      }
    </>
  )
}

export default AdminUsers