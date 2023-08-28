import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Personnal = () => {
  const { user } = useSelector((state) => state.auth);
  const [detail, setDetail] = useState({
    name: user.firstName,
    email: user.email,
    address: user.address,
    DOB: user.DOB
  });
  return (
    <div className='p-4 w-[40%]'>
      <div className='my-4'>
        <h1>Full Name</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <div className='my-4'>
        <h1>Email</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <div className='my-4'>
        <h1>Address</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <div className='my-4'>
        <h1>DOB</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <button className='border p-2 w-full bg-black/75 text-white rounded'>Save</button>
    </div>
  )
}

export default Personnal