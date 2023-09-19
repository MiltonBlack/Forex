import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { allDeposits } from '../services/authSlice';
import axios from 'axios';
import numberSeparator from 'number-separator';

const DepositsHistory = () => {
    const PROD_URL = `http://localhost:3005`
    // const PROD_URL = `https://broker-backend.onrender.com`
    const dispatch = useDispatch();
    const { deposits, user } = useSelector((state) => state.auth);
    const { _id, accessToken } = user;
    const [depositData, setDepositData] = useState([]);
    useEffect(() => {
        // dispatch(allDeposits(_id));
        fetchDepositTransaction()
    }, []);

    async function fetchDepositTransaction() {
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
        await axios.get(`${PROD_URL}/api/auth/deposit/single/${_id}`, config).then((res) =>
            (setDepositData(() => res.data))
            // localStorage.setItem("user", JSON.stringify(res?.data));
        ).catch((err) => console.log(err))
    }
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
                    {depositData?.map((item, idx) =>
                        (<tr key={idx}>
                            <td>{numberSeparator(item.amount, ",")}</td>
                            <td className={`p-1 ${item.status === "pending" ? "bg-red-400" : "bg-lime-400"} rounded-sm text-white`}>{item.status}</td>
                            <td>USDT</td>
                            <td>{moment(item.createdAt).fromNow()}</td>
                        </tr>))}
                </tbody>
            </table>
            <div className='w-[80%] border mt-4'></div>
            <div className='flex w-full justify-between items-center my-4 px-4 md:text-lg text-base'>
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

export default DepositsHistory