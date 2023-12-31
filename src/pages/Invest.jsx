import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Check from '../components/Check'
import Plan from '../components/Plan'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import { plans } from '../data/plans'
import { FaBitcoin, FaCopy, FaTimes } from 'react-icons/fa'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { projectStorage } from '../firebase/config';
import { Snackbar, Slide, Alert, CircularProgress } from '@mui/material';
import numberSeparator from 'number-separator';

const Invest = () => {
  const { log } = console;
  // const PROD_URL = `http://localhost:3005`
  const PROD_URL = `https://broker-backend.onrender.com`
  // const dispatch = useDispatch();
  const { user, deposits } = useSelector((state) => state.auth);
  const { accessToken, _id } = user;
  // URL for the Uploaded Proof of Payment
  const [urlProof, setUrlProof] = useState(null);
  const [proofImg, setProofImg] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const data = new FormData();
  // State for Proof of Payment Images Supported Types
  const types = ['image/png', 'image/jpg'];
  const [copySuccess, setCopySuccess] = useState('');
  const copyRef = useRef(null);
  const [info, setInfo] = useState(user);
  // State for wallet Address for Funds to be sent into
  const [wallet, setWallet] = useState(null);
  // State for Snackbar Success on Invest
  const [investSuccess, setInvestSuccess] = useState(false);
  let approvedDeposits;
  let totalDepositAmount = 0;
  let balance;
  // Get all Deposits with the status "Pending"
  approvedDeposits = deposits?.filter((item) => item.status !== "pending");
  // Total all Deposits with the status of "Pending"
  totalDepositAmount = approvedDeposits?.reduce((currentTotal, item) => {
    return parseInt(item.amount) + currentTotal;
  }, 0);
  balance = parseInt(totalDepositAmount) + 50;
  // console.log("balance: " + balance);
  // log(error);

  // Call Get Wallet Address on page Load
  useEffect(() => {
    getWallet();
  }, []);

  // Fetch Wallet Address Function and Save to wallet State.
  async function getWallet() {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    await axios.get(`${PROD_URL}/api/auth/settings/walletaddress`, config).then((res) => setWallet(res.data)).catch(err => console.log(err));
  }

  function uploadImage() {
    const data = new FormData();
    data.append("file", proofImg);
    data.append("upload_preset", "Blackdice");
    data.append("cloud_name", "doxb8ritt");
    axios.post("https://api.cloudinary.com/v1_1/doxb8ritt/image/upload", data).then((res) => { setUrlProof(res.data.url); console.log(res.data.url) });
    console.log(urlProof);
  }
  console.log(urlProof);

  // Function to Select and Save Proof of Payment Locally to proofImg state.
  function handleProofImg(e) {
    setProofImg(e.target.files[0]);
  };

  log("Proof Of Payment 2 : " + proofImg);
  // Function to Call Proof of Payment Upload
  async function uploadProof(proofImg) {
    if (!proofImg) return;
    const storageRef = ref(projectStorage, `/deposits/${proofImg.name}`);
    const uploadSequence = await uploadBytesResumable(storageRef, proofImg);
    uploadSequence.on("state_changed", (snapshot) => {
      const uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(uploadProgress);
    }, (error) => console.log(error),
      () => {
        getDownloadURL(uploadSequence.snapshot.ref).then(url => setUrlProof(url))
      })
  };
  log("Progress" + progress + "%");
  const [plan1, setPlan] = useState({
    plan: "none",
    balance: "",
  });
  const [invDeposit, setInvDeposit] = useState({
    user_id: _id,
    amount: "",
    status: "pending",
    proofUrl: urlProof,
    pending: true,
  })
  const [plan2, setPlan2] = useState({
    plan: "none",
  });
  const [subscribe, setSubscribe] = useState(false);
  const [deposit, setDeposit] = useState(false);

  // Function to Copy Wallet Address to Clipboard
  function copyAddress(e) {
    copyRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('copied')
  }
  const handleInvest = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    await axios
      .put(
        `${PROD_URL}/api/auth/plan/${_id}`,
        plan2,
        config
      )
      .then((res) => {
        log(res.data);
        setInfo((prev) => ({
          ...prev,
          plan: res.data.plan
        }))
        // localStorage.setItem("user", JSON.stringify(info));
      })
      .catch((err) => log(err));
    // Call Deposit Function after Updating User Plan and ProofImageURL
    await handleDepositRequest();
  }

  const handleRequest = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    if (balance < plan1.amount && progress === '100') {
      await axios
        .put(
          `${PROD_URL}/api/auth/plan/${_id}`,
          plan1,
          config
        )
        .then((res) => {
          log(res.data);
          // localStorage.setItem("user", JSON.stringify(res?.data)); 
        })
        .catch((err) => console.log(err));
    }
  };

  async function handleDepositRequest() {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    await axios
      .post(
        `${PROD_URL}/api/auth/deposit`,
        invDeposit,
        config
      ).then((res) => {
        console.log(res.data);
        setInvestSuccess(true);
        if(res.data){
          setDeposit(false);
          setSubscribe(false);
        }
      }
      ).catch((err) => console.log(err));

    timeOut();
  }

  // Timeout Function to Set Snackbar State to False After 3 Seconds.
  function timeOut() {
    setTimeout(() => {
      setInvestSuccess(false);
    }, 3000)
  }

  // Function to Close Snackbar on Outside Click: An MUI function for their Snackbar!!
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setInvestSuccess(false)
  };

  return (
    <>
      <div className='pt-16 bg-stone-100 px-10 relative'>
        <Snackbar autoHideDuration={5000} open={balance < plan1.amount} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert sx={{ width: '100%' }} severity='warning' >
            Insufficient Wallet Balance for Plan!!!
          </Alert>
        </Snackbar>
        <Snackbar autoHideDuration={5000} open={investSuccess} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert sx={{ width: '100%' }} severity='success' >
            Investment Successful
          </Alert>
        </Snackbar>
        <div className='flex my-4 flex-col'>
          <h1 className='text-3xl md:text-5xl font-bold md:font-extrabold'>We've got a Plan <br />that's Perfect for you</h1>
          <div className='p-1 border border-black rounded flex w-fit my-4'>
            <button className='p-1 bg-black/75 text-white font-light text-sm'>Monthly Billing</button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {plans.map((plan, idx) => (<Plan key={idx}>
            <div
              className='flex flex-col w-full h-full'
              onClick={() => {
                setPlan({
                  plan: plan.plan, balance: parseInt(balance) < parseInt(plan.amount) ? balance : parseInt(balance) -
                    parseInt(plan.amount)
                }); setPlan2({ plan: plan.plan }); setInvDeposit({ ...invDeposit, amount: plan.amount }); setSubscribe(true);
              }}>
              <h1 className='text-2xl'>{plan.plan}</h1>
              <div className='flex items-center'>
                <span className='text-4xl mr-1 my-2'>${numberSeparator(plan.amount, ",")}</span>
                <div className='flex flex-col'>
                  <span className='text-sm font-light'>{plan.duration} Days</span>
                </div>
              </div>
              <span className='text-sm font-light my-3'>{plan.feature}</span>
              <button className='p-2 border rounded text-white bg-black hover:scale-105 hover:bg-white hover:text-black w-full'>Invest</button>
              {plan.features.map((item, id) => (<div className='my-3' key={id}>
                <h1 className='font-bold text-base'>Features</h1>
                <span className='text-sm font-light'>Everything in our free plan plus...</span>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>{item.f1}</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>{item.f2}s</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>{item.f3}</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>{item.f4}</span>
                </div>
              </div>))}
            </div>
          </Plan>))}
        </div>
        <div className='py-10'></div>

        {/* Invest using the Available Balance from deposits */}
        {subscribe && (
          <Modal>
            <div>
              <div className='relative font-thin'>
                <div className='absolute right-0 top-0 border border-black rounded-full p-1 hover:scale-110 cursor-pointer' onClick={() => { setSubscribe(false); }}>
                  <FaTimes color='red' />
                </div>
                <div className='flex items-center'>
                  <span className='mr-2'>Wallet Balance</span>
                  <span className='p-1 bg-slate-100 rounded'>${balance}</span>
                </div>
                <h1 className='text-xl my-2 text-center'>You have selected the basic plan worth ${numberSeparator(invDeposit.amount, ",")}</h1>
                <span className='mb-3 text-sm'>you will be debited ${numberSeparator(invDeposit.amount, ",")} from your wallet or deposit directly to have access to all the features of this plan</span>
                <span></span>
                <div className='py-2 flex items-center justify-between font-normal'>
                  {balance > plan1.amount ? <button className='border p-1 bg-lime-500 rounded px-2' onClick={handleRequest} disabled={balance < plan1.amount}>"Subscribe From Wallet"</button> : <span>"Insufficient Funds"</span>}
                  <button className='border p-1 bg-amber-500 px-2 rounded' onClick={() => { setDeposit(true); setSubscribe(false); }}>Deposit and Subscribe Directly</button>
                </div>
              </div>
            </div>
          </Modal>
        )}

        {/* Invest By Depositing Directly With the Plan Amount */}
        {deposit && (
          <Modal>
            <div className=' max-w-sm'>
              <div className='relative font-thin'>
                <div className='absolute right-0 top-0 border border-black rounded-full p-1 hover:scale-110 cursor-pointer' onClick={() => { setDeposit(false); }}>
                  <FaTimes color='red' />
                </div>
                <div className='flex flex-col p-2'>
                  <div className='flex items-center my-1'>
                    <div className='flex flex-col'>
                      <div className='flex items-center my-2'>
                        <span>Amount</span>
                        <span className='p-1 bg-slate-400 rounded'>{numberSeparator(invDeposit.amount, ",")}</span>
                      </div>
                      <div className='flex items-center'>
                        <FaBitcoin />
                        <span className='ml-2'>Bitcoin Address</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full my-2 bg-stone-300 rounded pl-1'>
                    <input
                      type="text"
                      className='p-1 bg-stone-300 flex w-full outline-none'
                      value={wallet}
                      readOnly
                      ref={copyRef} />
                    <button className='p-1 text-sm font-bold' onClick={(e) => { copyAddress(e) }}>
                      {copySuccess === "copied" ? copySuccess : <FaCopy />}
                    </button>
                  </div>
                  <span className='text-base my-1'>Upload Proof Of Payment</span>
                    <input type="file" onChange={(e)=> setProofImg(e.target.files[0])} />
                  <div style={{ width: progress + '%' }} className="h-1 bg-lime-600 font-medium text-base rounded-md mb-1">{progress}%</div>
                  {urlProof === null ? <button className='border my-2 bg-black/50 text-white p-1 rounded' onClick={uploadImage}>
                    {progress === 0 ? "Complete Upload" : <CircularProgress/>}
                  </button> :
                    <button className='border my-2 bg-black/50 text-white p-1 rounded' onClick={handleInvest}>
                      Complete Subscription
                    </button>}
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Invest