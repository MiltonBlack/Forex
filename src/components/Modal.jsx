import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-slate-600/50'>
        <div className='fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-slate-600/50 flex items-center justify-center'>
            <div className='border-2 border-black p-2 bg-white rounded-md text-black relative'>{children}</div>
        </div>
    </div>
  )
}

export default Modal