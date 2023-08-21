import React, { useState } from 'react'
import { FaAmazon, FaApple, FaChartLine, FaEbay, FaFacebook, FaGlobeAmericas, FaGoogle, FaSearchPlus, FaClipboardCheck, FaCoins, FaChartBar } from 'react-icons/fa'
import solana from '../assets/solana.jpg'
import broker from '../assets/broker.jpg'
import device from '../assets/devices.svg'
import nama from '../assets/nama.svg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

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
              <Link to='signup'>
                <button className='border border-lime-500 mx-3 p-2 uppercase bg-lime-700 rounded-sm hover:scale-125 transition'>OPen Account</button>
              </Link>
              <Link to='login'>
                <button className='border border-sky-900 mx-3 p-2 uppercase bg-sky-900 rounded-sm hover:scale-125 transition'>Login Account</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='flex bg-slate-600 px-36 py-10'>
        <div className='grid grid-cols-2'>
          <img src={device} alt="" />
          <div>
            <h1 className='text-3xl font-thin'>All You Need To Know About Bitcoin</h1>
            <div className=' border-2 h-2 border-black bg-black rounded-lg w-28 my-4'></div>
            <p className='font-mono my-2'>
              Welcome to the exciting world of Bitcoin! In this concise guide, we'll introduce you to the fundamentals of Bitcoin – the pioneering cryptocurrency that has revolutionized finance and technology. Learn what Bitcoin is, how it works, and why it matters. Explore its potential for investments and its impact on the global economy. Whether you're a curious beginner or looking to deepen your understanding, this is your gateway to all things Bitcoin.
            </p>
          </div>
        </div>
      </section>
      <section className='flex bg-stone-400 px-36 py-10 text-white'>
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
            <p className='text-justify text-sm'>In the ever-evolving landscape of cryptocurrency, Bitcoin stands as the beacon of unwavering standards. We're not just shaping the future; we're setting the benchmark for innovation, security, and transparency. Join us in redefining what's possible in the world of digital finance.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center p-6'>
            <FaSearchPlus size={45} />
            <h1 className='text-xl my-2'>No Hidden Fees</h1>
            <p className='text-justify text-sm'>With Bitcoin, what you see is truly what you get. Say goodbye to hidden fees and unexpected charges. We're committed to complete transparency, ensuring that your crypto journey is as straightforward as it should be. Embrace a new era of financial honesty with Bitcoin.</p>
          </div>
          <div className='flex flex-col items-center justify-center p-6'>
            <FaGlobeAmericas size={45} />
            <h1 className='text-xl my-2'>Instant Trading</h1>
            <p className='text-justify text-sm'>In the fast-paced world of cryptocurrency, time is of the essence. With Bitcoin's instant trading capabilities, you can seize opportunities at the speed of thought. Say goodbye to waiting and hello to real-time action – all at your fingertips.</p>
          </div>
        </div>
      </section>
      <section className='px-36 bg-stone-200'>
        <div className='py-10'></div>
      </section>
      <section className='px-36 bg-stone-200'>
        <div className='py-10 flex flex-col'>
          <h1 className='text-2xl w-full text-center my-2'>The Best Bitcoin Exchange</h1>
          <span className=' text-justify my-2 font-light'>"Unlock the Future of Finance with Bitcoin: Your One-Stop Exchange for Seamless Trading and Limitless Possibilities!"

            In a world where financial landscapes are rapidly evolving, Bitcoin emerges as the unrivaled pioneer, offering a groundbreaking platform that redefines the way we perceive and engage with currency and investments. As you step into the realm of digital finance, Bitcoin stands tall as your steadfast companion, guiding you through the intricate corridors of crypto trading with unmatched expertise and innovation.

            Why choose Bitcoin as your preferred exchange? The reasons are as boundless as the opportunities it presents:<br />

            1. **Security Beyond Measure:** At Bitcoin, we place your security at the forefront. Our state-of-the-art encryption and multi-layered security protocols shield your assets from any potential threats, providing you with peace of mind as you navigate the digital economy.
            <br />
            2. **Unparalleled Accessibility:** Embracing the spirit of inclusivity, Bitcoin offers an interface that caters to both newcomers and seasoned traders. Our user-friendly design ensures that regardless of your level of expertise, you can effortlessly harness the power of cryptocurrency.<br />

            3. **Global Community:** Join a thriving community of individuals who share your enthusiasm for the future of finance. Connect, collaborate, and learn from like-minded traders as you navigate the exciting waters of crypto together.<br />

            4. **Empowerment through Education:** We believe that knowledge is the cornerstone of success in the crypto realm. Bitcoin provides a wealth of educational resources, ensuring that you're equipped with the insights needed to make informed decisions.<br />

            It's time to transcend the confines of traditional finance and embrace the boundless potential of cryptocurrency. Bitcoin isn't just an exchange; it's an emblem of empowerment, a gateway to a future where financial limitations are a thing of the past. Join us today and redefine the way you perceive, engage with, and benefit from the world of digital finance. The journey awaits – seize it with Bitcoin!"
          </span>
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
          <div className='p-2 my-9'>
            <div className='grid grid-cols-3 gap-6'>
              <div className='flex flex-col items-center justify-center text-lg font-normal'>
                <FaClipboardCheck size={55} />
                <h3 className='font-semibold text-2xl uppercase my-2'>Register</h3>
                <span className=' text-center font-thin'>SignUp in less than 30 seconds and instantly access Bitcoin's Exchange $50 Signup Bonus</span>
              </div>
              <div className='flex flex-col items-center justify-center text-lg font-normal'>
                <FaCoins size={55} />
                <h3 className='font-semibold text-2xl uppercase my-2'>Fund</h3>
                <span className=' text-center font-thin'>Make your First Deposit Directly into your Account wallet</span>
              </div>
              <div className='flex flex-col items-center justify-center text-lg font-normal'>
                <FaChartBar size={55} />
                <h3 className='font-semibold text-2xl uppercase my-2'>Trade</h3>
                <span className=' text-center font-thin'>Start Taking Advantages of excellent Trading Conditions, free Webinars and lots more...</span>
              </div>
            </div>
          </div>
          <div className='my-3 text-lg'>
            <button className='border border-lime-500 mx-3 p-2 uppercase bg-lime-700 rounded-sm hover:scale-125 transition'>OPen Account</button>
            <button className='border border-sky-900 mx-3 p-2 uppercase bg-sky-900 rounded-sm hover:scale-125 transition'>Login Account</button>
          </div>
        </div>
      </section>
      <Footer />
      <div className='bg-black text-white font-light text-sm px-36'>
        <div className='flex items-center justify-center py-10 border-white border-y'>
          <h1>Full Risk Warning | Privacy Policy | Trading Execution | Terms and Conditions | Anti-Money Laundering Policy | FATCA & CRS | Partnership Agreement | Partner Portal Agreement</h1>
        </div>
      </div>
      <div className='bg-black text-white px-36 py-10 font-light text-sm'>
        <div className='relative border border-white p-4 rounded'>
          <h1 className='absolute p-1 bg-black font-medium -top-4 left-5'>Risk Warning</h1>
          <span className='text-justify'>
            Bitcoin trading carries a high level of risk and may not be suitable for all investors. The value of Bitcoin can be extremely volatile, and there is a possibility of losing your entire investment. Past performance is not indicative of future results. This information is provided for educational and informational purposes only and should not be considered as financial or investment advice. You should conduct your own research and consider seeking advice from a qualified financial advisor before making any investment decisions. By engaging in Bitcoin trading, you acknowledge and accept the risks involved and understand that you are solely responsible for your investment decisions.
          </span>
        </div>
        <div className='my-10'>
          <div>
            <span>
              Bitcoin Xchange is a trademark owned by Bitcoin Exchange Global Limited and operates through the following authorized and regulated entities.
            </span>
          </div>
          <br />
          <div className='my-5'>
            <span className=''>
              Bitcoin Xchange Global Limited is a liability company established in Belize under the Registration number. 127009 and having its registered address at No. 4, Parkway Drive, Georgia, U.S.A. and is duly authorized by the Financial services commission of Belize (FSC), under licience No. GB21026376.
            </span>
          </div>
          <div className='my-3 text-center'>
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