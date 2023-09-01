import React, { useState, useEffect } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Register } from '../services/authSlice';
import img from '../assets/broker.jpg'

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth)

  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })
  const { firstName, lastName, email, password, password2 } = formData;
  useEffect(() => {
    if (success) {
      navigate('/dashboard');
    }
  }, [data, navigate, success]);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit =  (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log('passwords dont match');
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      };
      fetch('http://localhost:3005/api/auth/register', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then((response) => response.json())
        .then((info) => {
          setData(info)
        }).catch(err => console.log(err));

      dispatch(Register(userData));
      // 
    }
  };
  console.log(formData);
  console.log(data);
  return (
    <div className='bg-sky-500 w-screen h-screen relative'>
      <img src={img} alt="" className='h-screen w-screen' />
      <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black/50'>
        <div className='w-[370px] md:w-[512px] border-2 border-black shadow-lg p-2 bg-black/75'>
          <h1 className='text-white text-2xl my-2 uppercase w-full text-center'>Create Your Account</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <input
              type="text"
              placeholder='First Name...'
              className='p-1'
              name='firstName'
              value={firstName}
              onChange={onChange} />
            <input
              type="text"
              placeholder='Last Name...'
              className='p-1'
              name='lastName'
              value={lastName}
              onChange={onChange} />
          </div>
          <input
            type="email"
            placeholder='Email...'
            className='my-2 p-1 w-full'
            name='email'
            value={email}
            onChange={onChange} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='flex bg-white pr-1'>
              <input
                type="text"
                placeholder='Password...'
                className='p-1 w-full outline-none'
                name='password'
                value={password}
                onChange={onChange} />
              <button><FaEye /></button>
            </div>
            <div className='flex bg-white pr-1'>
              <input
                type="text"
                placeholder='Confirm Password...'
                className='p-1 w-full outline-none'
                name='password2'
                value={password2}
                onChange={onChange} />
              <button><FaEyeSlash /></button>
            </div>
          </div>
          <button
            className='uppercase border-2 p-2 my-4 w-[70%] hover:bg-white text-white transition'
            onClick={handleSubmit}>
            Sign Up
          </button>
          <div className='flex justify-center items-center'>
            <h1 className='mr-4 text-sm text-white'>Already Have An Account?</h1>
            <Link to='/login'>
              <em className=' text-blue-950 text-lg cursor-pointer'>Login</em>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp