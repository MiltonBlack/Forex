import React, { useState, useEffect } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Register } from '../services/authSlice';
import img from '../assets/broker.jpg'
import { CircularProgress, Snackbar, Alert, Slide } from '@mui/material';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, isLoading, register } = useSelector((state) => state.auth)
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    password: '',
    password2: '',
  })
  const { firstName, lastName, country, email, password, password2 } = formData;
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  console.log(selectedCountry);
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(countries[0].value);
      });

    if (success === true && register) {
      setSignUpSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [success]);
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
  const handleEmptyClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSignUpOpen(false);
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSignUpSuccess(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || email === "" || password === "" || password2 === "") {
      setSignUpOpen(true);
    }
    else if (password !== password2) {
      setOpen(true);
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        country,
        password,
      }
      dispatch(Register(userData));
    }
  };
  return (
    <div className='bg-sky-500 w-screen h-screen relative'>
      <img src={img} alt="" className='h-screen w-screen' />
      <Snackbar autoHideDuration={4000} open={open} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning' >
          Passwords Don Not Match!!!
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={4500} open={signUpOpen} onClose={handleEmptyClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning' >
          Input Fields Cannot be empty!!!
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={4500} open={signUpSuccess} onClose={handleSuccessClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='success' >
          Account Created Successfully
        </Alert>
      </Snackbar>
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
          <select
            placeholder='Country...'
            className='my-2 p-1 w-full border rounded'
            name='country'
            value={country}
            onChange={onChange} >
            <option value="Country">Country</option>
            {countries.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
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
            className='uppercase border p-2 my-5 w-[70%] hover:bg-white hover:text-black text-white transition rounded-sm'
            onClick={handleSubmit}>
            {isLoading ? <CircularProgress /> : "Sign Up"}
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