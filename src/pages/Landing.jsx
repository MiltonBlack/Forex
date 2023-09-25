import React, { useState } from 'react'
import { FaAmazon, FaApple, FaChartLine, FaEbay, FaFacebook, FaGlobeAmericas, FaGoogle, FaSearchPlus, FaClipboardCheck, FaCoins, FaChartBar } from 'react-icons/fa'
import solana from '../assets/solana.jpg'
import broker from '../assets/broker.jpg'
import device from '../assets/devices.svg'
import edu from '../assets/education.svg'
import nama from '../assets/nama.svg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { newspapers } from '../data/newspapers'

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.scrollY === 0 ? false : true)
    return () => (window.onscroll = null)
  };
  return (
    <div className='w-screen h-full text-black'>
      <nav className={`fixed flex text-sm md:text-base font-thin w-full justify-around text-white z-50 ${scrolled ? "scrolled" : ""} py-2`}>
        <h1>Bitcoin Exchange</h1>
        <span>Largest and Most Advanced Digital Currency</span>
      </nav>
      <section className='md:h-screen h-full relative w-full  bg-sky-500 flex items-center justify-center text-white '>
        <img src={solana} alt="" className='md:h-screen h-[70vh] w-screen object-cover' />
        <div className='absolute w-full h-full items-center justify-center px-10 md:px-36 pt-6 md:pt-16 bg-black/75'>
          <div className='flex flex-col items-center justify-center h-full w-full'>
            <h1 className='text-5xl text-center leading-[60px]'>Trade Securely on the <br /> World's Most active Digital Asset Exchange</h1>
            <p className='text-lg text-center my-2'>We are a US Based Digital Asset Exchange offering Maximum Security and Advanced Trading Features</p>
            <div className='text-base md:text-lg my-3'>
              <Link to='signup'>
                <button className='border border-lime-500 mx-2 md:mx-3 p-1 md:p-2 uppercase bg-lime-700 rounded-sm hover:scale-125 transition'>Open Account</button>
              </Link>
              <Link to='login'>
                <button className='border border-sky-900 mx-2 md:mx-3 p-1 md:p-2 uppercase bg-sky-900 rounded-sm hover:scale-125 transition'>Login Account</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='flex bg-gradient-to-b from-slate-800 px-10 md:px-36 py-5 md:py-10 text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='h-full flex items-center'>
            <img src={device} alt="" className='' />
          </div>
          <div className='ml-2'>
            <h1 className=' text-base md:text-3xl font-thin'>All You Need To Know About Bitcoin</h1>
            <div className=' border-2 h-2 border-black bg-black rounded-lg w-28 my-1 md:my-4'></div>
            <p className='font-thin my-2 text-xs md:text-xl text-justify'>
              Welcome to the exciting world of Bitcoin! In this concise guide, we'll introduce you to the fundamentals of Bitcoin – the pioneering cryptocurrency that has revolutionized finance and technology. Learn what Bitcoin is, how it works, and why it matters. Explore its potential for investments and its impact on the global economy. Whether you're a curious beginner or looking to deepen your understanding, this is your gateway to all things Bitcoin.
            </p>
          </div>
        </div>
      </section>
      <section className='flex bg-gradient-to-t from-stone-300 px-10 md:px-36 py-5 md:py-10 text-black'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h1 className='text-base md:text-3xl font-thin'>Trade on MT4, MT5 and cTrader Everywhere and Anytime</h1>
            <div className=' border-2 h-2 border-black bg-black rounded-lg w-28 my-1 md:my-4'></div>
            <p className='font-mono my-2 text-xs md:text-xl'>Choose one of the world's top trading platforms and trade on any device. Make Trading a part of your lifestyle.</p>
            <div className='ml-4 flex flex-col text-xs md:text-xl'>
              <span className='font-light my-1'>Award winning platforms, choosen by millions of traders around the world</span>
              <span className=' font-light my-1'>Inccredibly customizable and user-friendly allowing you to focus on trading</span>
            </div>
          </div>
          <div className='flex bg-white p-2'>
            <img src={nama} alt="" />
          </div>
        </div>
      </section>
      <section className='flex bg-stone-200 px-10 md:px-36 py-5 md:py-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 font-normal'>
          <div className='flex flex-col items-center justify-center p-2 md:p-6'>
            <FaChartLine size={45} />
            <h1 className='text-xl my-1 md:my-2 text-center'>Setting Standards</h1>
            <p className='text-justify text-xs md:text-sm'>In the ever-evolving landscape of cryptocurrency, Bitcoin stands as the beacon of unwavering standards. We're not just shaping the future; we're setting the benchmark for innovation, security, and transparency. Join us in redefining what's possible in the world of digital finance.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center p-2 md:p-6'>
            <FaSearchPlus size={45} />
            <h1 className='text-xl my-1 md:my-2 text-center'>No Hidden Fees</h1>
            <p className='text-justify text-xs md:text-sm'>With Bitcoin, what you see is truly what you get. Say goodbye to hidden fees and unexpected charges. We're committed to complete transparency, ensuring that your crypto journey is as straightforward as it should be. Embrace a new era of financial honesty with Bitcoin.</p>
          </div>
          <div className='flex flex-col items-center justify-center p-2 md:p-6'>
            <FaGlobeAmericas size={45} />
            <h1 className='text-xl my-1 md:my-2'>Instant Trading</h1>
            <p className='text-justify text-xs md:text-sm'>In the fast-paced world of cryptocurrency, time is of the essence. With Bitcoin's instant trading capabilities, you can seize opportunities at the speed of thought. Say goodbye to waiting and hello to real-time action – all at your fingertips.</p>
          </div>
        </div>
      </section>
      <section className='bg-stone-100 px-10 md:px-36 py-5 md:py-10 font-light text-base'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <img src={edu} alt="" />
          <div>
            <h1 className='text-xl md:text-2xl my-3'>Equip Yourself With Free Education</h1>
            <span className='my-2 text-sm md:text-base'>
              Embark on a well-rounded educational journey with experienced mentors. Join free Webinars, explore the Bitcoin Xchange Academy and Watch quick, straight-to-the-point videos.
            </span>
          </div>
        </div>
      </section>
      <section className='px-10 md:px-36 bg-stone-200'>
        <div className='py-5 md:py-10 flex flex-col'>
          <h1 className='text-2xl w-full text-center my-2'>The Best Bitcoin Exchange</h1>
          <span className=' text-justify my-2 font-light text-xs md:text-base'>"Unlock the Future of Finance with Bitcoin: Your One-Stop Exchange for Seamless Trading and Limitless Possibilities!"

            In a world where financial landscapes are rapidly evolving, Bitcoin emerges as the unrivaled pioneer, offering a groundbreaking platform that redefines the way we perceive and engage with currency and investments. As you step into the realm of digital finance, Bitcoin stands tall as your steadfast companion, guiding you through the intricate corridors of crypto trading with unmatched expertise and innovation.<br />
            It's time to transcend the confines of traditional finance and embrace the boundless potential of cryptocurrency. Bitcoin isn't just an exchange; it's an emblem of empowerment, a gateway to a future where financial limitations are a thing of the past. Join us today and redefine the way you perceive, engage with, and benefit from the world of digital finance. The journey awaits – seize it with Bitcoin!"
          </span>
        </div>
        <img src={broker} alt="" className=' h-60 w-full object-cover pb-8' />
      </section>
      <section className='bg-stone-300 px-10 md:px-36'>
        <div className='py-5 md:py-10'>
          <h1 className='uppercase text-center my-2'>As Seen On</h1>
          <div className='grid grid-cols-5 gap-1 md:gap-5'>
            {newspapers.map((item, idx) => (
              <div className='w-full h-24 bg-stone-100 flex items-center justify-center' key={idx}>
                <img src={item.image} alt="" className=' h-16 object-cover'/>
              </div>
            ))}
            {/* <div className='w-full h-24 bg-stone-100 flex items-center justify-center'>
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
            </div> */}
          </div>
        </div>
      </section>
      <section className=' bg-gradient-to-b from-black/50 to-black px-10 md:px-36'>
        <div className='py-5 md:py-10 flex flex-col items-center justify-center text-white'>
          <h1 className='uppercase text-lg md:text-2xl'>Start Trading Within Minutes</h1>
          <span className='font-thin text-lg md:text-2xl text-center'>We are a US Based Digital Asset Exchange offering maximum security and advanced trading features</span>
          <div className='p-2 my-9'>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 '>
              <div className='flex flex-col items-center justify-start md:justify-center text-lg font-normal py-2'>
                <FaClipboardCheck size={55} />
                <h3 className='font-semibold text-lg md:text-2xl uppercase my-2'>Register</h3>
                <span className=' text-center font-thin text-base md:text-xl'>SignUp in less than 30 seconds and instantly access Bitcoin's Exchange $50 Signup Bonus</span>
              </div>
              <div className='flex flex-col items-center justify-start md:justify-center text-lg font-normal py-2'>
                <FaCoins size={55} />
                <h3 className='font-semibold text-lg md:text-2xl uppercase my-2'>Fund</h3>
                <span className=' text-center font-thin text-base md:text-xl'>Make your First Deposit Directly into your Account wallet</span>
              </div>
              <div className='flex flex-col items-center justify-start md:justify-center text-lg font-normal py-2'>
                <FaChartBar size={55} />
                <h3 className='font-semibold text-lg md:text-2xl uppercase my-2'>Trade</h3>
                <span className=' text-center font-thin text-base md:text-xl'>Start Taking Advantages of excellent Trading Conditions, free Webinars and lots more...</span>
              </div>
            </div>
          </div>
          <div className='my-3 text-base md:text-lg flex'>
            <button className='border border-lime-500 mx-2 md:mx-3 p-1 md:p-2 uppercase bg-lime-700 rounded-sm hover:scale-125 transition'>OPen Account</button>
            <button className='border border-sky-900 mx-2 md:mx-3 p-1 md:p-2 uppercase bg-sky-900 rounded-sm hover:scale-125 transition'>Login Account</button>
          </div>
        </div>
      </section>
      <Footer />
      <div className='bg-black text-white font-light text-xs md:text-sm px-10 md:px-36'>
        <div className='flex items-center justify-center py-5 md:py-10 border-white border-y'>
          <h1>Full Risk Warning | Privacy Policy | Trading Execution | Terms and Conditions | Anti-Money Laundering Policy | FATCA & CRS | Partnership Agreement | Partner Portal Agreement</h1>
        </div>
      </div>
      <div className='bg-black text-white px-10 md:px-36 py-5 md:py-10 font-light text-xs md:text-sm'>
        <div className='relative border border-white p-2 md:p-4 rounded'>
          <h1 className='absolute p-1 bg-black font-medium -top-4 left-5'>Risk Warning</h1>
          <span className='text-justify'>
            Bitcoin trading carries a high level of risk and may not be suitable for all investors. The value of Bitcoin can be extremely volatile, and there is a possibility of losing your entire investment. Past performance is not indicative of future results. This information is provided for educational and informational purposes only and should not be considered as financial or investment advice. You should conduct your own research and consider seeking advice from a qualified financial advisor before making any investment decisions. By engaging in Bitcoin trading, you acknowledge and accept the risks involved and understand that you are solely responsible for your investment decisions.
          </span>
        </div>
        <div className=' my-4 md:my-10'>
          <div>
            <span>
              Bitcoin Xchange is a trademark owned by Bitcoin Exchange Global Limited and operates through the following authorized and regulated entities.
            </span>
          </div>
          <br />
          <div className='my-1 md:my-5'>
            <span className=''>
              Bitcoin Xchange Global Limited is a liability company established in Belize under the Registration number. 127009 and having its registered address at No. 4, Parkway Drive, Georgia, U.S.A. and is duly authorized by the Financial services commission of Belize (FSC), under licience No. GB21026376.
            </span>
          </div>
          <div className='w-full border-t border-white my-2'></div>
          <div className='my-1 md:my-3 text-center'>
            <span className='text-center'>
              2023 &copyright This website is owned and operated by Bitcoin Xchange Global Limited
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing