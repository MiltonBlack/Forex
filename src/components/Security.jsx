import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Security = () => {
  const {user} = useSelector((state)=> state.auth)
  // const [details, setDetails] = useState({
  //   password: user.password
  // })
  return (
    <div className='p-4 w-[40%]'>
      <div className='my-4'>
        <h1>Old Password</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <div className='my-4'>
        <h1>New Password</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <div className='my-4'>
        <h1>Confirm New Password</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <button className='border p-2 w-full bg-black/75 text-white rounded'>Save</button>
    </div>
  )
}

export default Security