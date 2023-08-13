import React from 'react'

const Login = () => {
  return (
    <div className=' bg-sky-500 flex items-center justify-center w-screen h-screen'>
      <div className='border-2 border-black shadow-xl p-2 flex flex-col w-[512px] items-start justify-center'>
        <h1 className='text-white my-2 text-center w-full uppercase'>Sign IN to your Account</h1>
        <input type="email" placeholder='enter your email...' className='border p-2 border-black my-1 w-full' />
        <input type="password" placeholder='enter your password...' className='border p-2 border-black my-1 w-full' />
        <button className='border-2 uppercase p-2 w-[70%] flex items-center justify-center text-black my-2 hover:bg-white'>Login</button>
        <div className='flex flex-col text-base w-full justify-center'>
          <h1 className='text-center text-blue-900 hover:underline cursor-pointer'>
            Forgot Password
          </h1>
          <span className='flex justify-center text-xs'>or</span>
          <hr className='border-black'/>
          <div className='flex justify-center items-center'>
            <h1 className='mr-4'>Don't Have An Account?</h1>
            <em className=' text-blue-950 text-lg cursor-pointer'>Sign Up Here</em>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login