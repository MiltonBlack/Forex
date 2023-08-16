import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from '../assets/solana.jpg'

const Login = () => {
  const navigate = useNavigate();
  function Login() {
    navigate('/dashboard')
  }
  return (
    <div className=' bg-sky-500 flex items-center justify-center w-screen h-screen relative'>
      <img src={img} alt="" className='h-screen w-screen' />
      <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black/75'>
        <div className='border-2 border-black shadow-xl p-2 flex flex-col w-[512px] items-start justify-center bg-slate-500'>
          <h1 className='text-white my-2 text-center w-full uppercase'>Sign IN to your Account</h1>
          <input type="email" placeholder='enter your email...' className='border p-2 border-black my-1 w-full' />
          <input type="password" placeholder='enter your password...' className='border p-2 border-black my-1 w-full' />
          <button className='border-2 uppercase p-2 w-[70%] flex items-center justify-center text-black my-2 hover:bg-white text-white' onClick={Login}>Login</button>
          <div className='flex flex-col text-base w-full justify-center'>
            <h1 className='text-center text-blue-900 hover:underline cursor-pointer'>
              Forgot Password
            </h1>
            <span className='flex justify-center text-xs'>or</span>
            <hr className='border-black' />
            <div className='flex justify-center items-center'>
              <h1 className='mr-4'>Don't Have An Account?</h1>
              <Link to='/signup'>
                <em className=' text-blue-950 text-lg cursor-pointer'>Sign Up Here</em>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login