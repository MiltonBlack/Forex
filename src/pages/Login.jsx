import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../services/authSlice'
import img from '../assets/solana.jpg'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData;
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error, } = useSelector((state) => state.auth);
  useEffect(()=>{
    if(user) {
      navigate('/dashboard')
    }
  },[user]);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  function  handleSubmit(e) {
    e.preventDefault();
    if (formData.email === "" && password === "") {
      console.log('fields cant be empty');
    } else {
      const userData = {
        email,
        password
      };
      
      // send userData to LoginUser function in authSlice for Login Request. 
      dispatch(LoginUser(userData));
    }
  }
  return (
    <div className=' bg-sky-500 flex items-center justify-center w-screen h-screen relative'>
      <img src={img} alt="" className='h-screen w-screen' />
      <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black/75'>
        <div className='border-2 border-black shadow-xl p-2 flex flex-col w-[512px] items-start justify-center bg-slate-500'>
          <h1 className='text-white my-2 text-center w-full uppercase'>Sign IN to your Account</h1>
          <input
            type="email"
            placeholder='enter your email...'
            className='border p-2 border-black my-1 w-full'
            name='email'
            value={email}
            onChange={onChange} />
          <input
            type="password"
            placeholder='enter your password...'
            className='border p-2 border-black my-1 w-full'
            name='password'
            value={password}
            onChange={onChange} />
          <button
            className='border-2 uppercase p-2 w-[70%] flex items-center justify-center hover:text-black my-2 hover:bg-white text-white'
            onClick={handleSubmit}>
            Login
          </button>
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