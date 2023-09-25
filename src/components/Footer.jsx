import React from 'react'
import {  FaFacebook, FaFighterJet,  FaInstagram, FaLinkedin,  FaTwitter, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='bg-black px-10 md:px-36 py-5 md:py-10 text-white font-thin text-sm'>
    <div className='grid grid-cols-3 md:grid-cols-5 gap-5'>
      <div>
        <h1 className='font-normal text-md my-2'>Bitcoin Exchange Trading and Investment Platform</h1>
        <p className='text-xs font-thin'>Explore its Potential for Investments and its Impacts on the Global Economy.</p>
      </div>
      <div>
        <h1 className='font-normal text-md my-2'>Trading</h1>
        <p>Trading Plans</p>
        <p>Investment Plans</p>
        <p>Trading Bots</p>
        <p>Trading Conditions</p>
      </div>
      <div>
        <h1 className='font-normal text-md my-2'>Contact Us</h1>
        <p>+234-3467-6435</p>
        <p>BitcoinX@email.com</p>
        <p>No 7, Greenville Street. Ohio. U.S.A.</p>
      </div>
      <div>
        <h1 className='font-normal text-md my-2'>Social Links</h1>
        <div className='grid gap-1 grid-cols-3 w-full'>
          <FaFacebook/>
          <FaTwitter/>
          <FaInstagram/>
          <FaYoutubeSquare/>
          <FaLinkedin/>
        </div>
      </div>
      <div>
        <h1 className='font-thin text-md my-2'>Subscribe To our NewsLetter and Updates</h1>
        <div className='flex border border-sky-900 w-full'>
          <input type="text" className='flex w-full'/>
          <button className='p-1 border pl-2'><FaFighterJet/></button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer