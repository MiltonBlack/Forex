import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const WithdrawHistory = () => {
    return (
        <div className='border my-4 rounded bg-white shadow-md flex flex-col items-center'>
            <table className='w-full'>
                <thead>
                    <tr className='bg-black/75 text-white md:text-lg text-sm'>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Payment Type</th>
                        <th>Date Started</th>
                    </tr>
                </thead>
                <tbody className='font-light text-center md:text-lg text-base'>
                    <tr>
                        <td>10,000</td>
                        <td className='p-1 bg-red-400 rounded-sm text-white'>Pending</td>
                        <td>Bitcoin</td>
                        <td>5 Days Ago</td>
                    </tr>
                </tbody>
            </table>
            <div className='w-[80%] border mt-4'></div>
            <div className='flex w-full justify-between items-center my-4 px-4 md:text-lg text-sm'>
                <span className=' font-normal'>Showing 1 of 1 entries</span>
                <div className='flex items-center justify-center'>
                    <FaAngleLeft />
                    <span className=' bg-stone-700 text-white rounded-full h-7 w-7 flex items-center justify-center mx-4'>1</span>
                    <FaAngleRight />
                </div>
            </div>
        </div>
    )
}

export default WithdrawHistory