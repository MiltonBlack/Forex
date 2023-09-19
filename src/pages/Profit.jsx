import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { plans } from '../data/plans'
import moment from 'moment'

const Profit = () => {
  const { user, planStatus } = useSelector((state) => state.auth);
  const { plan, createdAt } = user;
  let date = new Date(createdAt);
  const day = date.getDate();
  const [currentPlan, setCurrentPlan] = useState([{
    amount: 0,
    duration: 0
  }])
  const cP = plans?.find((item) => item.plan === plan);
  const { amount, duration } = currentPlan;
  const ROI = amount * duration * 0.45;
  var currentDay = moment().format();
  let intervalString = moment([createdAt]).fromNow();
  // let intervalString = moment(createdAt).fromNow();
  var cString = moment().diff(moment([createdAt]), "days");
  let initialROI;
  let progress;
  const interval = intervalString.split(" ")[0];
  if (cString > duration) {
    initialROI = ROI;
    progress = 100;
  } else {
    initialROI = cString * amount * 0.45;
  }
  function calc() {
    progress = ((initialROI / ROI) * 100);
    setCurrentPlan(cP);
    if (currentDay === day) {
      initialROI = 1 * amount;
    } else if (interval === duration) {
      initialROI = ROI;
    } else {
      initialROI = interval * amount;
    }
  };
  useEffect(() => {
    { plan !== "None" && calc() }
  }, [plan]);
  console.log(intervalString);
  console.log(interval);
  console.log(currentDay);
  console.log(cString);
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 h-[80vh]'>
        <div className='my-4'>
          <h1 className='text-2xl font-extrabold'>Your ROI History</h1>
          <span className='font-light text-sm text-slate-600'>Track all your Financial Profits in one place</span>
        </div>
        <div className='grid grid-cols-1 gap-4 border mt-2 font-normal'>
          <span className='border text-center p-2 bg-black/75 text-white hover:bg-white hover:text-black uppercase'>Trading Profits</span>
        </div>
        <div className='border my-4 rounded bg-white shadow-md flex flex-col items-center'>
          <table className='w-full'>
            <thead>
              <tr className='bg-black/75 text-white uppercase md:text-lg text-sm'>
                <th>Subscription Type</th>
                <th>Amount</th>
                <th>Progress</th>
                <th>Profit</th>
                <th>Duration</th>
                <th>Total</th>
                <th>Date Started</th>
              </tr>
            </thead>
            <tbody className='font-light text-center md:text-lg text-base'>
              {planStatus ?
                (<tr>
                  <td>{plan}</td>
                  <td>${amount ? amount : "0"}</td>
                  <td>{progress ? progress : "0"}%</td>
                  <td>${initialROI}</td>
                  <td>{duration}</td>
                  <td>${ROI ? ROI : "0"}</td>
                  <td>{intervalString}</td>
                </tr>) : "Your Plan Has Not Being Approved Yet"}
            </tbody>
          </table>
          <div className='w-[80%] border mt-4'></div>
          <div className='flex w-full justify-between items-center my-4 px-4 md:text-lg text-base'>
            <span className=' font-normal'>Showing 1 of 1 entries</span>
            <div className='flex items-center justify-center'>
              <FaAngleLeft />
              <span className=' bg-stone-700 text-white rounded-full h-7 w-7 flex items-center justify-center mx-4'>1</span>
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profit