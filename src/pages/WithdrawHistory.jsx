import React, { useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { allWithdrawals } from '../services/authSlice';
import numberSeparator from 'number-separator'

const WithdrawHistory = () => {
    const dispatch = useDispatch();
    const { withdrawals, user } = useSelector((state) => state.auth);
    const { _id } = user;
    useEffect(()=> {
        dispatch(allWithdrawals(_id));
    },[_id, dispatch]);
    console.log(withdrawals);
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
                   {withdrawals?.map((item, idx) => 
                    <tr key={idx}>
                        <td>{numberSeparator(item.withdrawAmount, ",")}</td>
                        <td className={`p-1 ${item.status === "pending" ? "bg-red-400" : "bg-lime-400"} rounded-sm text-white`}>{item.status}</td>
                        <td>Bitcoin</td>
                        <td>{moment(item.createdAt).fromNow()}</td>
                    </tr>)}
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