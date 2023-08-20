import React from 'react'

const Account = () => {
  return (
    <div className='p-4 w-[40%]'>
      <div className='my-4'>
        <h1>Network Type</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <div className='my-4'>
        <h1>Bitcoin Address</h1>
        <input type="text" className='border rounded my-1 w-full border-black'/>
      </div>
      <button className='border p-2 w-full bg-black/75 text-white rounded'>Save</button>
    </div>
  )
}

export default Account