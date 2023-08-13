import React, { useState } from 'react'
import { FaAmazon, FaApple, FaChartLine, FaEbay, FaFacebook, FaGlobeAmericas, FaGoogle,  FaSearchPlus } from 'react-icons/fa'
import solana from '../assets/solana.jpg'
import broker from '../assets/broker.jpg'
import device from '../assets/devices.svg'
import nama from '../assets/nama.svg'
import Footer from '../components/Footer'

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true)
    return () => (window.onscroll = null)
  };
  return (
    <div className='w-screen h-full text-black'>
      <nav className={`fixed flex font-thin w-full justify-around text-white z-50 ${scrolled ? "scrolled" : ""} py-2`}>
        <h1>Bitcoin Exchange</h1>
        <span>Largest and Most Advanced Digital Currency</span>
      </nav>
      <section className='h-screen relative w-full  bg-sky-500 flex items-center justify-center text-white '>
        <img src={solana} alt="" className='h-screen w-screen' />
        <div className='absolute w-full h-full items-center justify-center px-36 pt-16 bg-black/75'>
          <div className='flex flex-col items-center justify-center h-full w-full'>
            <h1 className='text-5xl text-center leading-[60px]'>Trade Securely on the <br /> World's Most active Digital Asset Exchange</h1>
            <p className='text-lg text-center my-2'>We are a US Based Digital Asset Exchange offering Maximum Security and Advanced Trading Features</p>
            <div className='my-3'>
              <button className='border border-lime-500 mx-3 p-2 uppercase bg-lime-700 rounded-sm hover:scale-125 transition'>OPen Account</button>
              <button className='border border-sky-900 mx-3 p-2 uppercase bg-sky-900 rounded-sm hover:scale-125 transition'>Login Account</button>
            </div>
          </div>
        </div>
      </section>
      <section className='flex bg-stone-200 px-36 py-10'>
        <div className='grid grid-cols-2'>
          <img src={device} alt="" />
          <div>
            <h1 className='text-3xl font-thin'>All You Need To Know About Bitcoin</h1>
            <div className=' border-2 h-2 border-black bg-black rounded-lg w-28 my-4'></div>
            <p className='font-mono my-2'>a very long text</p>
          </div>
        </div>
      </section>
      <section className='flex bg-black/75 px-36 py-10 text-white'>
        <div className='grid grid-cols-2'>
          <div>
            <h1 className='text-3xl font-thin'>Trade on MT4, MT5 and cTrader Everywhere and Anytime</h1>
            <div className=' border-2 h-2 border-black bg-black rounded-lg w-28 my-4'></div>
            <p className='font-mono my-2'>Choose one of the world's top trading platforms and trade on any device. Make Trading a part of your lifestyle.</p>
            <div className='ml-4 flex flex-col'>
            <span className='font-light my-1'>Award winning platforms, choosen by millions of traders around the world</span>
            <span className=' font-light my-1'>Inccredibly customizable and user-friendly allowing you to focus on trading</span>
            </div>
          </div>
          <div className='flex bg-white p-2'>
            <img src={nama} alt="" />
          </div>
        </div>
      </section>
      <section className='flex bg-stone-300 px-36 py-10'>
        <div className='grid grid-cols-3 gap-3 font-normal'>
          <div className='flex flex-col items-center justify-center p-6'>
            <FaChartLine size={45} />
            <h1 className='text-xl my-2'>Setting Standards</h1>
            <p className='text-justify text-sm'>All the LOrem ipsum generators on the internet tend to repeat predefined chunks as necessary making this the first generator on the internet</p>
          </div>
          <div className='flex flex-col items-center justify-center p-6'>
            <FaSearchPlus size={45} />
            <h1 className='text-xl my-2'>No Hidden Fees</h1>
            <p className='text-justify text-sm'>All the LOrem ipsum generators on the internet tend to repeat predefined chunks as necessary making this the first generator on the internet</p>
          </div>
          <div className='flex flex-col items-center justify-center p-6'>
            <FaGlobeAmericas size={45} />
            <h1 className='text-xl my-2'>Instant Trading</h1>
            <p className='text-justify text-sm'>All the LOrem ipsum generators on the internet tend to repeat predefined chunks as necessary making this the first generator on the internet</p>
          </div>
        </div>
      </section>
      <section className='px-36 bg-stone-200'>
        <div className='py-10 flex flex-col'>
          <h1 className='text-2xl w-full text-center my-2'>The Best Bitcoin Exchange</h1>
          <span className=' text-justify my-2 font-light'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believeable. If you are going to use a passage of Lorem Ipsum, you need to be sure that they aint anything embarrassing hidden in the middle of text. All the Lorem Ipsum Generators on the internet tend to repeat predefined chunks as necessary making this the first true generator</span>
        </div>
        <img src={broker} alt="" className=' h-60 w-full object-cover pb-8' />
      </section>
      <section className='bg-stone-300 px-36'>
        <div className='py-10'>
          <h1 className='uppercase text-center my-2'>As Seen On</h1>
          <div className='grid grid-cols-5 gap-5'>
            <div className='w-full h-24 bg-stone-100 flex items-center justify-center'>
              <FaGoogle size={50} />
            </div>
            <div className='w-full h-24 bg-stone-100 flex items-center justify-center'>
              <FaApple size={50} />
            </div>
            <div className='w-full h-24 bg-stone-100 flex items-center justify-center'>
              <FaFacebook size={50} />
            </div>
            <div className='w-full h-24 bg-stone-100 flex items-center justify-center'>
              <FaEbay size={50} />
            </div>
            <div className='w-full h-24 bg-stone-100 flex items-center justify-center'>
              <FaAmazon size={50} />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black/75 px-36'>
        <div className='py-10 flex flex-col items-center justify-center text-white'>
          <h1 className='uppercase text-2xl'>Start Trading Within Minutes</h1>
          <span className='font-thin'>We are a US Based Digital Asset Exchange offering maximum security and advanced trading features</span>
          <div className='my-3 text-lg'>
            <button className='border border-lime-500 mx-3 p-2 uppercase bg-lime-700 rounded-sm hover:scale-125 transition'>OPen Account</button>
            <button className='border border-sky-900 mx-3 p-2 uppercase bg-sky-900 rounded-sm hover:scale-125 transition'>Login Account</button>
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  )
}

export default Landing