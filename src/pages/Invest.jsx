import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Check from '../components/Check'
import Plan from '../components/Plan'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import { plans } from '../data/plans'
import { FaBitcoin, FaCopy, FaTimes } from 'react-icons/fa'

const Invest = () => {
  const { log } = console;
  const { user } = useSelector((state) => state.auth);
  const { accessToken, _id, investment, balance, walletAddress } = user;
  const [copySuccess, setCopySuccess] = useState('');
  const copyRef = useRef(null);
  const [plan1, setPlan] = useState({
    // id:_id,
    plan: "none",
    balance: "",
    amount: ""
  });
  const [plan2, setPlan2] = useState({
    // id:_id,
    plan: "none",
  });
  const [subscribe, setSubscribe] = useState(false);
  const [deposit, setDeposit] = useState(false);
  function copyAddress(e){
    copyRef.current.select();
    document.execCommand('copy');
        e.target.focus();
        setCopySuccess('copied')
  }
  const handleDeposit = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    await axios
      .put(
        `http://localhost:3005/api/auth/plan/${_id}`,
        plan2,
        config
      )
      .then((res) => log(res.data))
      .catch((err) => console.log(err));
  }
  const handleRequest = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    if (balance < investment) {
      await axios
        .put(
          `http://localhost:3005/api/auth/plan/${_id}`,
          plan1,
          config
        )
        .then((res) => log(res.data))
        .catch((err) => console.log(err));
    }
  };
  log(plan1)
  log(accessToken)
  log(_id)
  return (
    <>
      <div className='pt-16 bg-stone-100 px-10 relative'>
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
              onClick={() => { setPlan({ plan: plan.plan, amount: "$" + plan.amount, balance: parseInt(balance) < parseInt(plan.amount) ? balance : parseInt(balance) - 
              parseInt(plan.amount) }); setPlan2({plan: plan.plan}); setSubscribe(true); }}>
              <h1 className='text-2xl'>{plan.plan}</h1>
              <div className='flex items-center'>
                <span className='text-4xl mr-1 my-2'>${plan.amount}</span>
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
                <h1 className='text-xl my-2 text-center'>You have selected the basic plan worth ${plans.amount}</h1>
                <span className='mb-3 text-sm'>you will be debited $350 from your wallet or deposit directly to have access to all the features of this plan</span>
                <span></span>
                <div className='py-2 flex items-center justify-between font-normal'>
                  <button className='border p-1 bg-lime-500 rounded px-2' onClick={handleRequest} disabled={balance < investment}>{balance < investment ? "Subscribe from Wallet" : "Insufficient Funds"}</button>
                  <button className='border p-1 bg-amber-500 px-2 rounded' onClick={() => { setDeposit(true); }}>Deposit and Subscribe Directly</button>
                </div>
              </div>
            </div>
          </Modal>
        )}
        {deposit && (
          <Modal>
            <div>
              <div className='relative font-thin'>
                <div className='absolute right-0 top-0 border border-black rounded-full p-1 hover:scale-110 cursor-pointer' onClick={() => { setDeposit(false); }}>
                  <FaTimes color='red' />
                </div>
                <div className='flex flex-col p-2'>
                  <div className='flex items-center my-1'>
                    <div className='flec flex-col'>
                      <div className='flex items-center my-2'>
                        <span>Amount</span>
                        <span className='p-1 bg-slate-400 rounded'>{plan1.amount}</span>
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
                      value={walletAddress}
                      readOnly
                      ref={copyRef} />
                    <button className='p-1 text-sm font-bold' onClick={(e)=> {copyAddress(e)}}>
                      {copySuccess === "copied" ? copySuccess: <FaCopy />}
                    </button>
                  </div>
                  <span className='text-base my-1'>Upload Proof Of Payment</span>
                  <input type="file" name="" id="" className='border p-2 my-1' />
                  <button className='border my-2 bg-black/50 text-white p-1 rounded' onClick={handleDeposit}>
                    Complete Subscription
                  </button>
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