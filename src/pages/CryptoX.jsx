import React from 'react'
import { FaArrowAltCircleDown, FaCog } from 'react-icons/fa'
import Footer from '../components/Footer'

const CryptoX = () => {
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 h-[80vh]'>
        <div className='flex w-full h-full items-center justify-center'>
          <div className='bg-white py-2 shadow-lg shadow-black'>
            <div className='flex px-2 w-full justify-between py-2 font-normal'>
              <h1>Swap</h1>
              <div>
                <FaCog />
              </div>
            </div>
            <div className='w-full border border-stone-400 '></div>
            <div className='px-2'>
              <select name="" id="">
                <option value="bnb">Bitcoin</option>
                <option value="bnb">Etherium</option>
                <option value="bnb">USDT</option>
              </select>
              <div className='flex bg-stone-400 outline-none my-2 border-none w-full p-1 rounded font-light'>
                <input type="text" className='bg-stone-400'/>
                <span>0.0</span>
              </div>
              <div className='flex justify-center items-center my-2'>
                <FaArrowAltCircleDown/>
              </div>
              <select name="select a token" id="">
                <option value="bnb">USDT</option>
                <option value="bnb">Etherium</option>
                {/* <option value="bnb">USDT</option> */}
              </select>
              <div className='flex bg-stone-400 outline-none border-none my-2 w-full p-1 rounded font-light'>
                <input type="text" className='bg-stone-400' />
                <span>0.0</span>
              </div>
              <div className='flex w-full items-center justify-between font-light text-sm'>
                <span>Slippage Tolerance</span>
                <span>0.1%</span>
              </div>
              <button className='border bg-black/75 rounded-sm text-white w-full hover:scale-95 my-3
              '>Swap Token</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CryptoX