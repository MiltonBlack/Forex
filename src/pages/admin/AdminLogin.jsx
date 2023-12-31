 import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAdmin } from '../../services/adminSlice'
import img from '../../assets/solana.jpg'
import { Alert, Snackbar, CircularProgress, Slide } from '@mui/material'

const AdminLogin = () => {
  const { isLoading, isLoggedIn } = useSelector((state) => state.admin);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  useEffect(() => {
    if (isLoggedIn === true) {
      setTimeout(() => {
        navigate('/auth/admin');
    }, 2000);
    }
  }, [isLoggedIn]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
     setOpen(true);
    } else {
      const adminData = {
        email,
        password
      };
      // Send userData to LoginUser function in authSlice for Login Request. 
      dispatch(LoginAdmin(adminData));
    }
  };

  return (
    <div className=' bg-sky-500 flex items-center justify-center w-screen h-screen relative'>
      <Snackbar autoHideDuration={4000} open={isLoggedIn} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='success' >
          Signin Successfull
        </Alert>
      </Snackbar>
      <Snackbar message='Input Fields Cannot be blank!!' autoHideDuration={4000} open={open} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}/>
      <img src={img} alt="" className='h-screen w-screen' />
      <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black/75'>
        <div className='border-2 border-black shadow-xl p-2 flex flex-col w-[380px] md:w-[512px] items-start justify-center bg-slate-500/50'>
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
            {isLoading ? <CircularProgress /> : 'Login'}
          </button>
          <Snackbar autoHideDuration={4000} open={open} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
            <Alert sx={{ width: '100%' }} severity='warning' >
              Input Fields cannot be Empty!!
            </Alert>
          </Snackbar>
          <div className='flex flex-col text-base w-full justify-center'>
            <h1 className='text-center text-blue-900 hover:underline cursor-pointer'>
              Forgot Password
            </h1>
            <span className='flex justify-center text-xs'>or</span>
            <hr className='border-black' />
            <div className='flex justify-center items-center'>
              <h1 className='mr-4'>Don't Have An Account?</h1>
              <Link to='/auth/administration/v1/create'>
                <em className=' text-blue-950 text-lg cursor-pointer'>Sign Up Here</em>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin