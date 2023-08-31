import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Security = () => {
  const { user } = useSelector((state) => state.auth)
  const [details, setDetails] = useState({
    password: user.password
  });
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
    await axios
      .put(
        `http://localhost:3005/api/auth/settings/personnal/${user._id}`,
        details,
        config
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div className='p-4 w-[40%]'>
      <div className='my-4'>
        <h1>Old Password</h1>
        <input
          type="text"
          className='border rounded my-1 w-full border-black'
          name='password'
          onChange={() => { onChange() }} />
      </div>
      <div className='my-4'>
        <h1>New Password</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <div className='my-4'>
        <h1>Confirm New Password</h1>
        <input type="text" className='border rounded my-1 w-full border-black' />
      </div>
      <button className='border p-2 w-full bg-black/75 text-white rounded' onClick={updatePassword}>Save</button>
    </div>
  )
}

export default Security