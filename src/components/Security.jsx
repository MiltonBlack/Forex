import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Security = () => {
  const { user } = useSelector((state) => state.auth)
  const [details, setDetails] = useState({
    password: user.password,
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
    if (password === newPassword) {
      console.log('New Password Cannot be Old Password');
    } else if (newPassword !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      await axios
        .put(
          `http://localhost:3005/api/auth/settings/personnal/${user._id}`,
          data,
          config
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
    console.log(data);
  }
  console.log(details);
  return (
    <div className='p-4 w-full md:w-[40%]'>
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