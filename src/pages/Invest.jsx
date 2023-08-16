import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { FaCheck } from 'react-icons/fa'
import Check from '../components/Check'
import Plan from '../components/Plan'
import Footer from '../components/Footer'
import { plans } from '../data/plans'

const Invest = () => {
  return (
    <>
      <div className='pt-16 bg-stone-100 px-10'>
        <div className='flex my-4 flex-col'>
          <h1 className='text-5xl font-extrabold'>We've got a Plan <br />that's Perfect for you</h1>
          <div className='p-1 border border-black rounded flex w-fit my-4'>
            <button className='p-1 bg-black/75 text-white font-light text-sm'>Monthly Billing</button>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {plans.map((plan, idx)=> (<Plan key={idx}>
            <div className='flex flex-col w-full h-full'>
              <h1 className='text-2xl'>{plan.plan}</h1>
              <div className='flex items-center'>
                <span className='text-4xl mr-1 my-2'>${[plan.amount]}</span>
                <div className='flex flex-col'>
                  <span className='text-sm font-light'>{plan.duration} Days</span>
                </div>
              </div>
              <span className='text-sm font-light my-3'>{plan.feature}</span>
              <button className='p-2 border rounded text-white bg-black hover:scale-105 hover:bg-white hover:text-black w-full'>Invest</button>
              {plan.features.map(item => (<div className='my-3'>
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
          {/* <Plan>
            <div className='flex flex-col w-full h-full'>
              <h1 className='text-2xl'>Basic Plus Plan</h1>
              <div className='flex items-center'>
                <span className='text-4xl mr-1 my-2'>$1,200</span>
                <div className='flex flex-col'>
                  <span className='text-sm font-light'>21 Days</span>
                </div>
              </div>
              <span className='text-sm font-light my-3'>Basic Trading Features For up to a Month</span>
              <button className='p-2 border rounded text-white bg-black hover:scale-105 hover:bg-white hover:text-black w-full'>Invest</button>
              <div className='my-3'>
                <h1 className='font-bold text-base'>Features</h1>
                <span className='text-sm font-light'>Everything in our free plan plus...</span>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Access to Basic Features</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Basic Reporting and Analytics</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Basic Trading Bot</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Auto Renewal</span>
                </div>
              </div>
            </div>
          </Plan>
          <Plan>
            <div className='flex flex-col w-full h-full'>
              <h1 className='text-2xl'>Compact Plan</h1>
              <div className='flex items-center'>
                <span className='text-4xl mr-1 my-2'>$5,200</span>
                <div className='flex flex-col'>
                  <span className='text-sm font-light'>14 Days</span>
                </div>
              </div>
              <span className='text-sm font-light my-3'>Basic Trading Features For up to a Month</span>
              <button className='p-2 border rounded text-white bg-black hover:scale-105 hover:bg-white hover:text-black w-full'>Invest</button>
              <div className='my-3'>
                <h1 className='font-bold text-base'>Features</h1>
                <span className='text-sm font-light'>Everything in our free plan plus...</span>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Access to Basic Features</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Basic Reporting and Analytics</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Basic Trading Bot</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Auto Renewal</span>
                </div>
              </div>
            </div>
          </Plan>
          <Plan>
            <div className='flex flex-col w-full h-full'>
              <h1 className='text-2xl'>Premium Plan</h1>
              <div className='flex items-center'>
                <span className='text-4xl mr-1 my-2'>$10,000</span>
                <div className='flex flex-col'>
                  <span className='text-sm font-light'>7 days</span>
                </div>
              </div>
              <span className='text-sm font-light my-3'>Basic Trading Features For up to a Month</span>
              <button className='p-2 border rounded text-white bg-black hover:scale-105 hover:bg-white hover:text-black w-full'>Invest</button>
              <div className='my-3'>
                <h1 className='font-bold text-base'>Features</h1>
                <span className='text-sm font-light'>Everything in our free plan plus...</span>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Access to Basic Features</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Basic Reporting and Analytics</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Basic Trading Bot</span>
                </div>
                <div className='flex items-center font-light text-base py-1'>
                  <Check />
                  <span className='ml-2'>Auto Renewal</span>
                </div>
              </div>
            </div>
          </Plan> */}
        </div>
        <div className='py-10'></div>
      </div>
      <Footer/>
    </>
  )
}

export default Invest