import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Check from '../components/Check'
import Plan from '../components/Plan'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import { plans } from '../data/plans'
import { FaTimes } from 'react-icons/fa'

const Invest = () => {
  const { log } = console;
  const { user } = useSelector((state) => state.auth);
  const { accessToken, _id, plan, investment, balance } = user;
  var total = balance - investment;
  const [plan1, setPlan] = useState({
    plan: "none",
    balance: total
  });
  const [plan2, setPlan1] = useState({
    plan: "none",
  });
  const [subscribe, setSubscribe] = useState(true);
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
  log(plan)
  log(accessToken)
  log(_id)
  return (
    <>
      <div className='pt-16 bg-stone-100 px-10 relative'>
        <div className='flex my-4 flex-col'>
          <h1 className='text-5xl font-extrabold'>We've got a Plan <br />that's Perfect for you</h1>
          <div className='p-1 border border-black rounded flex w-fit my-4'>
            <button className='p-1 bg-black/75 text-white font-light text-sm'>Monthly Billing</button>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {plans.map((plan, idx) => (<Plan key={idx}>
            <div className='flex flex-col w-full h-full' onClick={() => { setPlan({ plan: plan.plan }) }}>
              <h1 className='text-2xl'>{plan.plan}</h1>
              <div className='flex items-center'>
                <span className='text-4xl mr-1 my-2'>${plan.investment}</span>
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
                <div className='absolute right-0 top-0 border border-black rounded-full p-1 hover:scale-110 cursor-pointer'>
                  <FaTimes color='red' />
                </div>
                <div className='flex items-center'>
                  <span className='mr-2'>Wallet Balance</span>
                  <span className='p-1 bg-slate-100 rounded'>$1,000</span>
                </div>
                <h1 className='text-xl my-2 text-center'>You have selected the basic plan worth $350</h1>
                <span className='mb-3 text-sm'>you will be debited $350 from your wallet or deposit directly to have access to all the features of this plan</span>
                <span></span>
                <div className='py-2 flex items-center justify-between font-normal'>
                  <button className='border p-1 bg-lime-500 rounded px-2' onClick={handleRequest}>{ balance > investment ? "Subscribe from Wallet" : "Insufficient Funds" }</button>
                  <button className='border p-1 bg-amber-500 px-2 rounded' onClick={handleDeposit}>Deposit and Subscribe Directly</button>
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