import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsersAdmin } from '../../services/adminSlice';
import moment from 'moment';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Loader from '../../components/Loader';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getAllUsersAdmin());
  }, [dispatch]);
  if (isLoading) {
    return <Loader />;
  }
  console.log(allUsers);
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 min-h-[100vh] h-full'>
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
                <th>Amount</th>
                <th>Plan Start</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className='font-light text-center md:text-lg text-base'>
              {allUsers.map((item, idx) => 
                <tr key={idx}>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.investment}</td>
                <td>${item.amount}</td>
                <td>5 Days Ago</td>
                <td className='p-1 bg-red-400 rounded-sm text-white'>{item.emailVerified}</td>
                <td>{moment(item.createdAt).fromNow}</td>
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
    </>
  )
}

export default AdminUsers