import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { plans } from '../data/plans'
import moment from 'moment'

const Profit = () => {
  const { user } = useSelector((state) => state.auth);
  const { plan, createdAt } = user;
  let date = new Date(createdAt);
  const day = date.getDate();
  const currentPlan = plans.find((item) => item.plan === plan);
  const { amount, duration } = currentPlan;
  const ROI = amount * duration;
  const currentDay = new Date();
  const intervalString = moment(createdAt).fromNow;
  const interval = intervalString.split[0];
  let initialROI;
  let progress;
  function calc() {
    progress = ((initialROI / ROI) * 100);
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
  }, [plan])
  console.log(currentDay);
  console.log(day);
  console.log(ROI);
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
              <tr>
                <td>{plan}</td>
                <td>${amount}</td>
                <td>{progress ?  progress : "0"}%</td>
                <td>${initialROI}</td>
                <td>{duration}</td>
                <td>${ROI}</td>
                <td>{intervalString}</td>
              </tr>
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