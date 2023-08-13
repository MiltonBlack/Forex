import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Check = () => {
    return (
        <div className='h-6 w-6 rounded-full bg-lime-500 flex items-center justify-center'>
            <FaCheck color='white' size={15} />
        </div>
    )
}

export default Check