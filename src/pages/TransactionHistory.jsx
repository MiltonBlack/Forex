import React from 'react'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const TransactionHistory = () => {
  const { isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 h-[80vh]'>
        <div className='my-4'>
          <h1 className='text-2xl font-extrabold'>Your Transaction History</h1>
          <span className='font-light text-sm text-slate-600'>Track all your financial data in one place</span>
        </div>
        <div className='grid grid-cols-2 gap-4 border mt-2 font-normal'>
          <Link to='deposits' className='border text-center p-2 bg-black/75 text-white hover:bg-white hover:text-black'>Deposits</Link>
          <Link to='withdrawals' className='bg-white border text-center p-2'>Withdrawals</Link>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default TransactionHistory