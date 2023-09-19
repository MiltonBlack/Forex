import React, { useState, useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import { FaAngleLeft, FaAngleRight, FaMinusSquare, FaPlus, FaCopy, FaRecycle, FaRegFutbol, FaBitcoin, FaTimes } from 'react-icons/fa'
import Modal from '../components/Modal';
import { useSelector } from 'react-redux'
import { projectStorage } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import axios from 'axios';
import Loader from '../components/Loader';
import moment from 'moment'
import { CircularProgress, Snackbar, Alert, Slide } from '@mui/material';

const Fund = () => {
  const BASE_URL = `http://localhost:3005`
  const PROD_URL = `https://broker-backend.onrender.com`

  const { user, isLoading } = useSelector((state) => state.auth);
  const { accessToken, _id, balance, walletAddress } = user;

  // Copy to Clipboard State and useRef Initilization.
  const [copySuccess, setCopySuccess] = useState('');
  const copyRef = useRef(null);

  // Loading State on request
  const [loading, setLoading] = useState(false);

  // Proof of Payment URL state
  const [urlProof, setUrlProof] = useState(null);
  const [open, setOPen] = useState(false);
  const [depositLoading, setDepositLoading] = useState(false);
  const [withdrawLoading, setWithdrawLoading] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [progress, setProgress] = useState(0);
  const [proofImg, setProofImg] = useState(null)
  const [error, setError] = useState(null)
  const types = ['image/png', 'image/jpg'];
  const [wallet, setWallet] = useState(null);

  useEffect(()=>{
    getWallet();
  },[])
  async function getWallet(){
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    await axios.get(`${PROD_URL}/api/auth/settings/walletaddress`, config).then((res)=> setWallet(res.data)).catch(err => console.log(err));
  }
  // set balance field in model for the backend to reflect here
  const [deposit, setDeposit] = useState({
    user_id: _id,
    amount: "",
    status: "pending",
    proofUrl: urlProof,
    pending: true,
  });

  const [withdrawFund, setWithdrawFund] = useState({
    user_id: _id,
    withdrawAmount: "",
    walletAddress: "",
    status: "pending",
    pending: true
  });

  useEffect(() => {
    fetchWithdrawalTransaction();
    fetchDepositTransaction();
  }, []);

  const [depositData, setDepositData] = useState([]);
  const [withdrawData, setWithdrawData] = useState([]);
  const withdrawOnChange = (e) => {
    setWithdrawFund((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const onChange = (e) => {
    setDeposit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  function copyAddress(e) {
    copyRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('copied')
  }

  async function fetchWithdrawalTransaction() {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
    await axios.get(`${PROD_URL}/api/auth/withdraw/single/${_id}`, config).then((res) =>
      (setWithdrawData(res.data))
      // localStorage.setItem("user", JSON.stringify(res?.data));
    ).catch((err) => console.log(err));
  };

  async function fetchDepositTransaction() {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
    await axios.get(`${PROD_URL}/api/auth/deposit/single/${_id}`, config).then((res) =>
      (setDepositData(() => res.data))
      // localStorage.setItem("user", JSON.stringify(res?.data));
    ).catch((err) => console.log(err))
  }

  const { amount } = deposit;

  async function handleProofImg(e) {
    const chooseImg = e.target.files[0]
    if (chooseImg && types.includes(chooseImg.type)) {
      setProofImg(chooseImg)
      setError("")
    } else {
      setProofImg(null)
      setError("please select an image file (.jpg/.png)")
    }
    await uploadProof(chooseImg);
  }

  async function uploadProof(chooseImg) {
    if (!chooseImg) return;
    const storageRef = ref(projectStorage, `/deposits/${chooseImg.name}`);
    const uploadSequence = await uploadBytesResumable(storageRef, chooseImg);
    uploadSequence.on("state_changed", (snapshot) => {
      const uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(uploadProgress);
    }, (error) => console.log(error),
      () => {
        getDownloadURL(uploadSequence.snapshot.ref).then(url => setUrlProof(url))
      })
  };

  async function handleDepositRequest() {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    setDepositLoading(true);
    await axios
      .post(
        `${PROD_URL}/api/auth/deposit`,
        deposit,
        config
      ).then((res) => {
        setDepositLoading(false);
      }
        // localStorage.setItem("user", JSON.stringify(res?.data));
      ).catch((err) => console.log(err));
    fetchWithdrawalTransaction();
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDepositLoading(false);
    setWithdrawLoading(false);
  };

  async function handleWithdrawalRequest() {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    setWithdrawLoading(true);
    await axios
      .post(
        `${PROD_URL}/api/auth/withdraw`,
        withdrawFund,
        config
      ).then((res) => {
        setWithdrawLoading(false);
        console.log(res.data)
      }
        // localStorage.setItem("user", JSON.stringify(res?.data));
      ).catch((err) => console.log(err));
  }

  function toggleWallet() {
    setOPen(!open)
  }

  function toggleWithdraw() {
    setWithdraw(!withdraw);
  }

  if (isLoading) {
    return (
      <Loader />
    );
  }
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 h-fit relative z-0'>
        <Snackbar autoHideDuration={4000} open={depositLoading} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert sx={{ width: '100%' }} severity='success' >
            Deposit Request Sent Successfully
          </Alert>
        </Snackbar>
        <Snackbar autoHideDuration={4000} open={withdrawLoading} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert sx={{ width: '100%' }} severity='success' >
            Withdrawal Request Sent Successfully
          </Alert>
        </Snackbar>
        <div className='my-4'>
          <h1 className='text-2xl font-extrabold'>Fund Your Wallet</h1>
          <span className='font-light text-sm text-slate-600'>Track all your financial assets and earnings in one place</span>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 font-normal '>
          <span className='border text-center p-2 bg-black/75 text-white hover:bg-white hover:text-black flex items-center justify-center shadow-md cursor-pointer hover:shadow-none' onClick={() => { setOPen(true) }}>
            <FaPlus size={30} className='mr-4' />
            Deposit Funds
          </span>
          <span className='border text-center p-2 bg-black/75 text-white hover:bg-white hover:text-black flex items-center justify-center shadow-md cursor-pointer hover:shadow-none' onClick={() => { setWithdraw(true) }}>
            <FaMinusSquare size={30} className='mr-4' />
            Withdraw Funds
          </span>
          <span className='bg-white border md:flex justify-between items-center p-1 shadow-md hover:shadow-none hidden'>
            <FaRecycle size={30} />
            <div className='flex flex-col px-1'>
              <span className='text-sm'>Deposits History</span>
              <span>None</span>
            </div>
          </span>
          <span className='bg-white border md:flex justify-between items-center p-1 shadow-md hover:shadow-none hidden'>
            <FaRegFutbol size={30} />
            <div className='flex flex-col px-1'>
              <span className='text-sm'>Withdrawal History</span>
              <span>None</span>
            </div>
          </span>
        </div>
        <div className='flex w-full'></div>
        <div className='border my-4 rounded bg-white shadow-md flex flex-col items-center'>
          <table className='w-full'>
            <thead>
              <tr className='bg-black/75 text-white'>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Type</th>
                <th>Date Started</th>
              </tr>
            </thead>
            <tbody className='font-light text-center'>
              {depositData?.map((item, idx) =>
                <tr key={idx} className='pb-1'>
                  <td>${item.amount}</td>
                  <td className={`p-1 ${item.status === "pending" ? "bg-red-400" : "bg-lime-400"} rounded-sm text-white`}>{item.status}</td>
                  <td>Bitcoin</td>
                  <td>{moment(item.createdAt).fromNow}</td>
                </tr>)}
            </tbody>
          </table>
          <div className='w-[80%] border mt-4'></div>
          <div className='flex w-full justify-between items-center my-4 px-4 '>
            <span className=' font-normal'>Showing 1 of 1 entries</span>
            <div className='flex items-center justify-center'>
              <FaAngleLeft />
              <span className=' bg-stone-700 text-white rounded-full h-7 w-7 flex items-center justify-center mx-4'>1</span>
              <FaAngleRight />
            </div>
          </div>
        </div>
        {open &&
          (
            <Modal>
              <div
                className='absolute right-2 border border-black rounded-full p-1 hover:scale-110 cursor-pointer hover:rotate-180 transition'
                onClick={toggleWallet}>
                <FaTimes color='red' />
              </div>
              <div className='flex flex-col p-2 max-w-lg md:w-fit'>
                <div className='flex items-center my-1'>
                  <FaBitcoin />
                  <span className='ml-2'>Bitcoin Address</span>
                </div>
                <div className='flex w-full my-2 bg-stone-300 rounded pl-1'>
                  <input
                    type="text"
                    className='p-1 bg-stone-300 flex w-full outline-none'
                    value={wallet}
                    ref={copyRef}
                    readOnly />
                  <button className='p-1 font-light text-xs' onClick={copyAddress} >
                    {copySuccess === "copied" ? copySuccess : <FaCopy />}
                  </button>
                </div>
                <input
                  type="text"
                  className='p-1 bg-stone-300 flex w-full outline-none rounded my-2'
                  placeholder='Enter Deposit Amount' name='amount'
                  value={amount}
                  onChange={onChange} />
                <span className='text-base my-1'>Upload Proof Of Payment</span>
                <input
                  type="file"
                  name="file"
                  id="fileUpload"
                  className='border p-2 my-1'
                  onChange={handleProofImg}
                  accept='image/*' />
                <div style={{ width: progress + '%' }} className="h-1 bg-lime-600 font-medium mb-4 text-base rounded-md">{progress}%</div>
                <button
                  className='border my-2 bg-black/50 text-white p-1 rounded'
                  onClick={handleDepositRequest}>
                  {depositLoading ? <CircularProgress /> : "Complete Payment"}
                </button>
              </div>
            </Modal>
          )}
        {withdraw && (
          <Modal>
            <div className='absolute right-2 border border-black rounded-full p-1 hover:scale-110 cursor-pointer hover:rotate-180 transition' onClick={toggleWithdraw}>
              <FaTimes color='red' />
            </div>
            <div className='flex flex-col p-2'>
              <div className='flex items-center my-1'>
                <FaBitcoin />
                <span className='ml-2'>Bitcoin</span>
              </div>
              <span>Enter Amount to Withdraw</span>
              <div className='flex w-full my-2 bg-stone-300 rounded pl-1'>
                <input
                  type="text"
                  className='p-1 bg-stone-300 flex w-full outline-none'
                  name='withdrawAmount'
                  value={withdrawFund.withdrawAmount}
                  onChange={withdrawOnChange} />
              </div>
              <span className='text-base my-1'>Enter Bitcoin Wallet Address</span>
              <input
                type="text"
                name="walletAddress"
                id=""
                className='border p-2 my-1'
                value={withdrawFund.walletAddress}
                onChange={withdrawOnChange} />
              <button
                className='border my-2 bg-black/50 text-white p-1 rounded'
                onClick={handleWithdrawalRequest}>
                {withdrawLoading ? <CircularProgress /> : "Complete Request"}
              </button>
            </div>
          </Modal>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Fund