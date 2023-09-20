import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Alert, Slide, Snackbar } from '@mui/material'

const Security = () => {
  const { user } = useSelector((state) => state.auth);
  const [empty, setEmpty] = useState(false);
  const [noMatch, setNoMatch] = useState(false);
  const [sameP, setSameP] = useState(false);
  const [details, setDetails] = useState({
    password: user?.password,
    newPassword: "",
    confirmPassword: ""
  });
  const { password, newPassword, confirmPassword } = details;
  function onChange(e) {
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  async function updatePassword() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    const data = {
      newPassword
    }
    if (password === "" || newPassword === "" || confirmPassword === "") {
      setEmpty(true);
    } else if (password === newPassword) {
      setSameP(true);
    } else if (newPassword !== confirmPassword) {
      setNoMatch(true);
    } else {
      await axios
        .put(
          `https://broker-backend.onrender.com/api/auth/settings/personnal/${user._id}`,
          data,
          config
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
    console.log(data);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setEmpty(false);
    sameP(false);
    noMatch(false);
  };
  console.log(details);
  return (
    <div className='p-4 w-full md:w-[40%]'>
      <Snackbar autoHideDuration={5000} open={sameP} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning' >
          New Password Cannot Be Old Password!
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={5000} open={noMatch} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning' >
          Passwords Do Not Match!!
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={5000} open={empty} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert sx={{ width: '100%' }} severity='warning' >
          Input Fields Cannot be Empty!!!
        </Alert>
      </Snackbar>
      <div className='my-4'>
        <h1>Old Password</h1>
        <input
          type="text"
          className='border px-2 rounded my-1 w-full border-black'
          name='password'
          value={password}
          onChange={onChange} />
      </div>
      <div className='my-4'>
        <h1>New Password</h1>
        <input
          type="text"
          className='border px-2 rounded my-1 w-full border-black'
          name='newPassword'
          value={newPassword}
          onChange={onChange} />
      </div>
      <div className='my-4'>
        <h1>Confirm New Password</h1>
        <input
          type="text"
          className='border px-2 rounded my-1 w-full border-black'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onChange}
        />
      </div>
      <button className='border p-2 w-full bg-black/75 text-white rounded' onClick={updatePassword}>Save</button>
    </div>
  )
}

export default Security