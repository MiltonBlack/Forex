import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignUp = () => {
  return (
    <div className='bg-sky-500 w-screen h-screen'>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[512px] border-2 border-black shadow-lg p-2'>
          <h1 className='text-white text-2xl my-2 uppercase w-full text-center'>Create Your Account</h1>
          <div className='grid grid-cols-2 gap-2'>
            <input type="text" placeholder='First Name...' className='p-1' />
            <input type="text" placeholder='Last Name...' className='p-1' />
          </div>
          <input type="email" placeholder='Email...' className='my-2 p-1 w-full' />
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex bg-white pr-1'>
              <input type="text" placeholder='Password...' className='p-1 w-full outline-none' />
              <button><FaEye/></button>
            </div>
            <div className='flex bg-white pr-1'>
              <input type="text" placeholder='Confirm Password...' className='p-1 w-full outline-none' />
              <button><FaEyeSlash/></button>
            </div>
          </div>
          <button className='uppercase border-2 p-2 my-4 w-[70%] hover:bg-white transition'>Sign Up</button>
          <div className='flex justify-center items-center'>
            <h1 className='mr-4 text-sm'>Already Have An Account?</h1>
            <em className=' text-blue-950 text-lg cursor-pointer'>Login</em>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp