import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 h-[100vh] relative'>
        <div className='my-4 flex flex-col'>
          <h1 className='text-2xl font-extrabold my-2'>Your Profile</h1>
          <span className='font-light text-sm text-slate-600'>All Your Personnal Details in one Place</span>
        </div>
        <Card>
          <div className='flex w-full font-medium'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
              <div className=''>
                <div className='flex flex-col my-4'>
                  <span>Name:</span>
                  <span className='border p-1 rounded-sm text-stone-600 font-normal text-center'>{user.lastName} {user.firstName}</span>
                </div>
                <div className='flex flex-col my-4'>
                  <span>Email:</span>
                  <span className='border p-1 rounded-sm text-stone-600 font-normal text-center'>{user.email}</span>
                </div>
                <div className='flex flex-col my-4'>
                  <span>Address:</span>
                  <span className='border h-8 p-1 rounded-sm text-stone-600 font-normal text-center'>{user?.address} </span>
                </div>
              </div>
              <div className=''>
                <div className='flex flex-col my-4'>
                  <span>Account Type:</span>
                  <span className='border p-1 rounded-sm text-stone-600 font-normal text-center'>Bitcoin Wallet</span>
                </div>
                <div className='flex flex-col my-4'>
                  <span>Investment Plan:</span>
                  <span className='border p-1 rounded-sm text-stone-600 font-normal text-center'>{user.plan}</span>
                </div>
                <div className='flex flex-col my-4'>
                  <span>Password:</span>
                  <span className='border p-1 h-8 rounded-sm text-stone-600 font-normal text-center'>{user.password}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </>
  )
}

export default Profile