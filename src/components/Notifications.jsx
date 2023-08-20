import React from 'react'
import Switch from './Switch'

const Notifications = () => {
  return (
    <div className='p-2'>
      <div className='my-4'>
        <h1>Send Me an Email when Password Changed</h1>
        <Switch/>
      </div>
      <div  className='my-4'>
        <h1>Send Confirmation OTP to my email When Withdrawing My Funds</h1>
        <Switch/>
      </div>
      <div className='my-4'>
        <h1>Send me an email When my Investment Plan Expires</h1>
        <Switch/>
      </div>
      <button className='p-2 border bg-slate-600 text-white w-60 rounded my-2'>Save</button>
    </div>
  )
}

export default Notifications