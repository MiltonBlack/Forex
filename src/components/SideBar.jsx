import React from 'react'
import DashHome from '../pages/DashHome'

const SideBar = () => {
  return (
    <div className='flex w-screen h-full'>
        <div className='fixed h-screen bg-sky-500'>sidebar</div>
        <div className='ml-24 w-full h-full'>
            <DashHome/>
        </div>
    </div>
  )
}

export default SideBar