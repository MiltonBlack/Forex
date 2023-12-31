import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Personnal = () => {
  const { user } = useSelector((state) => state.auth);
  const [detail, setDetail] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: user.address
  });
  const { firstName, lastName, email, address, dob } = detail;
  const [info, setInfo] = useState(user);
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
    if(firstName==="" || lastName===""|| email===""){
      console.log('Details Cannot be left Blank!');
    }
    await axios
      .put(
        `https://broker-backend.onrender.com/api/auth/settings/personnal/${user._id}`,
        detail,
        config
      )
      .then((res) => {
        console.log(res.data);
        setInfo((prev) => ({
          ...prev,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          address: res.data.address
        }));
        // localStorage.setItem("user", JSON.stringify(info));
      })
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