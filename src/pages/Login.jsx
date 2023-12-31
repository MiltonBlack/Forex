import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../services/authSlice'
import img from '../assets/solana.jpg'
import { CircularProgress, Snackbar, Alert, Slide } from '@mui/material'

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginField, setLoginField] = useState(false);
  const [anyError, setAnyError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user, loggedIn, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!loggedIn) {
      setLoginSuccess(false);
    } else {
      setLoginSuccess(true);
      setTimeout(() => {
        navigate('/dashboard')
      }, 5000);
    }
  }, [user, loggedIn, isLoading, navigate]);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLoginSuccess(false);
  };

  const handleEmptyClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLoginField(false);
  };

  const handleErrorClose = (event, reason)=> {
    if (reason === "clickaway") {
      return;
    };
    setAnyError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      setLoginField(true);
    } else {
      const userData = {
        email,
        password
      };
      // send userData to LoginUser function in authSlice for Login Request. 
      dispatch(LoginUser(userData));
      if (error !== "") setAnyError(true);
    }
  }

  return (
    <div className=' bg-sky-500/50 flex items-center justify-center w-screen h-screen relative'>
      <img src={img} alt="" className='h-screen w-screen' />
      <Snackbar autoHideDuration={4000} open={loginSuccess} onClose={handleSuccessClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='success' >
          SignIn Successfull
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={5000} open={loginField} onClose={handleEmptyClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning' >
          Email and Passwords Fields Cannot be Left Blank...
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={5000} open={anyError} onClose={handleErrorClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning' >
          {error}!!!
        </Alert>
      </Snackbar>
      <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black/75'>
        <div className='border-2 border-black shadow-xl p-2 flex flex-col w-[380px] md:w-[512px] items-start justify-center bg-slate-500'>
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
          <button disabled={email === "" || password === ""}
            className={`border-2 uppercase p-2 w-full md:w-[70%] flex items-center justify-center hover:text-black my-2 mt-3 hover:bg-white text-white ${isLoading && 'bg-white'} rounded-sm`}
            onClick={handleSubmit}>
            {isLoading ? <CircularProgress /> : "Login"}
          </button>
          <div className='flex flex-col text-base w-full justify-center'>
            <h1 className='text-center text-blue-900 hover:underline cursor-pointer'>
              forgot password
            </h1>
            <span className='flex justify-center text-xs'>or</span>
            <hr className='border-black' />
            <div className='flex justify-center items-center'>
              <h1 className='mr-4'>Don't Have An Account?</h1>
              <Link to='/signup'>
                <em className=' text-blue-950 text-base cursor-pointer uppercase'>sign up here</em>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login