import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Personnal = () => {
  const { user } = useSelector((state) => state.auth);
  const [detail, setDetail] = useState({
    // name: user.firstName + " " + user.lastName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address
  });
  const { firstName, lastName, email, address, dob } = detail;
  function onChange(e) {
    setDetail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  async function updatePersonnal() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    await axios
      .put(
        `http://localhost:3005/api/auth/settings/personnal/${user._id}`,
        detail,
        config
      )
      .then((res) => {console.log(res.data); localStorage.setItem("user", JSON.stringify(res?.data));})
      .catch((err) => console.log(err));
  }
  console.log(detail)
  return (
    <div className='p-4 w-full md:w-[40%]'>
      <div className='my-4'>
        <h1>First Name</h1>
        <input type="text" className='border rounded px-2 my-1 w-full border-black' name='firstName' value={firstName} onChange={onChange} />
      </div>
      <div className='my-4'>
        <h1>Last Name</h1>
        <input type="text" className='border rounded px-2 my-1 w-full border-black' name='lastName' value={lastName} onChange={onChange} />
      </div>
      <div className='my-4'>
        <h1>Email</h1>
        <input type="text" className='border px-2 rounded my-1 w-full border-black' name='email' value={email} onChange={onChange} />
      </div>
      <div className='my-4'>
        <h1>Address</h1>
        <input 
        type="text" 
        className='px-2 border rounded my-1 w-full border-black' 
        name='address' 
        value={address} 
        onChange={onChange} />
      </div>
      <div className='my-4'>
        <h1>DOB</h1>
        <input
          type="text"
          className='px-2 border rounded my-1 w-full border-black'
          name='dob'
          value={dob}
          onChange={onChange} />
      </div>
      <button
        className='border p-2 w-full bg-black/75 text-white rounded'
        onClick={updatePersonnal}>
        Save
      </button>
    </div>
  )
}

export default Personnal