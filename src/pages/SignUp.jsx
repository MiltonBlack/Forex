import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import img from '../assets/broker.jpg'

const SignUp = () => {
  const navigate = useNavigate();
  function navigation() {
    navigate('/dashboard');
  }
  return (
    <div className='bg-sky-500 w-screen h-screen relative'>
      <img src={img} alt="" className='h-screen w-screen' />
      <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black/50'>
        <div className='w-[512px] border-2 border-black shadow-lg p-2 bg-black/75'>
          <h1 className='text-white text-2xl my-2 uppercase w-full text-center'>Create Your Account</h1>
          <div className='grid grid-cols-2 gap-2'>
            <input type="text" placeholder='First Name...' className='p-1' />
            <input type="text" placeholder='Last Name...' className='p-1' />
          </div>
          <input type="email" placeholder='Email...' className='my-2 p-1 w-full' />
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex bg-white pr-1'>
              <input type="text" placeholder='Password...' className='p-1 w-full outline-none' />
              <button><FaEye /></button>
            </div>
            <div className='flex bg-white pr-1'>
              <input type="text" placeholder='Confirm Password...' className='p-1 w-full outline-none' />
              <button><FaEyeSlash /></button>
            </div>
          </div>
          <button className='uppercase border-2 p-2 my-4 w-[70%] hover:bg-white text-white transition' onClick={navigation}>Sign Up</button>
          <div className='flex justify-center items-center'>
            <h1 className='mr-4 text-sm text-white'>Already Have An Account?</h1>
            <Link to='/login'>
              <em className=' text-blue-950 text-lg cursor-pointer' >Login</em>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp