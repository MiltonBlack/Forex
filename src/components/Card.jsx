import React from 'react'

const Card = ({children}) => {
  return (
    <div className='p-2 shadow-lg rounded-md bg-white flex text-xs sm:text-sm md:text-lg' __css="true" >{children}</div>
  )
}

export default Card