import React from 'react'

const Plan = ({children}) => {
  return (
    <div className='p-4 shadow-lg rounded-md bg-white flex hover:scale-110 transition'>{children}</div>
  )
}

export default Plan