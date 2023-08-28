import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className='p-4 w-[40%]'>
      <div className='my-4'>
        <h1>Network Type</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <div className='my-4'>
        <h1>Bitcoin Address</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <button className='border p-2 w-full bg-black/75 text-white rounded'>Save</button>
    </div>
  )
}

export default Account