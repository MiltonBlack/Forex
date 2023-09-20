import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Account = () => {
  const { user } = useSelector((state) => state.auth);
  const {accessToken, _id} = user;
  const [info, setInfo] = useState(user);
  const [details, setDetails] = useState({
    walletType: user.walletType,
    walletAddress: user.walletAddress
  });
  const { walletAddress, walletType } = details;
  function inChange(e){
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const data = {
     walletAddress
  }
  async function updateAccount(){
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    if(walletAddress === ""){
      console.log('wallet Address cannot be empty!');
    }
    await axios
      .put(
        `https://broker-backend.onrender.com/api/auth/settings/account/${_id}`,
        data,
        config
      )
      .then((res) => {console.log(res.data);
        setInfo((prev) => ({
          ...prev,
          walletAddress: res.data.walletAddress
        }));
    })
      .catch((err) => console.log(err));
    }
    console.log(info);
  console.log(details)
  return (
    <div className='p-4 w-full md:w-[40%]'>
      <div className='my-4'>
        <h1>Network Type</h1>
        <input type="text" className='border rounded px-2 my-1 w-full border-black' name='walletType' value={walletType} readOnly/>
      </div>
      <div className='my-4'>
        <h1>Bitcoin Address</h1>
        <input type="text" className='border px-2 rounded my-1 w-full border-black' name='walletAddress' value={walletAddress} onChange={inChange} />
      </div>
      <button className='border p-2 w-full bg-black/75 text-white rounded' onClick={updateAccount}>Save</button>
    </div>
  )
}

export default Account