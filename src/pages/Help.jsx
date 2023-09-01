import React from 'react'
import Card from '../components/Card'

const Help = () => {
  return (
    <>
      <div className='pt-16 bg-stone-100 px-5 md:px-10 h-[100vh] relative'>
        <div className='my-4 flex flex-col'>
          <h1 className='text-2xl font-extrabold my-2'>Bitcoin Xchange Help and Support</h1>
          <span className='font-light text-sm text-slate-600'>For Enquires sugestions and complaints, call us</span>
          <br />
          <span className='font-light text-xl text-slate-800 py-4'>support@bitpay.com</span>
        </div>
        <Card>
          <div className='flex flex-col w-full'>
            <textarea className='w-full border my-3 h-40'></textarea>
            <button className='border w-full md:w-[50%] p-2 md:p-1 bg-sky-500 mt-2 text-white hover:bg-sky-700 rounded'>Send Message</button>
          </div>
        </Card>
      </div>
      <footer className='text-white bg-black flex items-center justify-center p-4'>
        <hr/>
        2023 All Rights Reserved
      </footer>
    </>
  )
}

export default Help