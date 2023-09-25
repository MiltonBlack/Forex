import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlus, FaUser } from 'react-icons/fa'
import Card from '../../components/Card'
import numberSeparator from 'number-separator';

let tvScriptLoadingPromise;
const AdminDashHome = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.admin);
  const { totalDeposit, withdrawals, usersLength } = admin;
  const pendingDeposit = totalDeposit?.filter((item) => item.status === "pending");
  const pendingDepositAmount = pendingDeposit?.reduce((currentTotal, item) => {
      return parseInt(item.amount) + currentTotal;
    }, 0);
  const totalDepositAmount = totalDeposit?.reduce((currentTotal, item)=> {
    return parseInt(item.amount) + currentTotal;
  }, 0);
  const totalWithdrawalAmount = withdrawals?.reduce((currentTotal, item)=> {
    return parseInt(item.withdrawAmount) + currentTotal;
  }, 0); 
  console.log(admin);
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_9bd40') && 'TradingView' in window) {
          new window.TradingView.widget({
            // autosize: true,
            width: 1000,
            height: 700,
            symbol: "BINANCE:BTCUSD",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_9bd40"
          });
        }
      }
    },
    []
  );

  return (
    <>
      <div className=' bg-stone-200 w-full h-full flex flex-col px-5 md:px-10 pt-16'>
        <div className='flex w-full justify-between items-center my-8'>
          <div>
            <h1 className=' font-black text-2xl'>Hello, Admin! {admin.fullName}</h1>
            <span className='font-light text-sm text-slate-600'>Take full control of your Broker Users, their Deposits and Withdrawals</span>
          </div>
          <div className='border border-black p-1 bg-rose-500'>
            <FaPlus color='white' />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-[5%]'>
          <Card>
            <div className='flex flex-col h-full w-full justify-between'>
              <div className='flex w-full justify-between items-center'>
                <FaUser size={30} />
                <span>All Users:</span>
                <span>{usersLength}</span>
              </div>
              <span className='font-light text-sm text-slate-600 mt-4'>25% This week</span>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col h-full w-full justify-between'>
              <div className='flex w-full justify-between items-center'>
                <span className=' text-base font-light'>Pending Deposits:</span>
                <span>${numberSeparator(pendingDepositAmount, ",")}</span>
              </div>
              <div className='flex w-full justify-between items-center'>
                <span className='font-light text-sm text-slate-600 mt-4'>No:</span>
                <span className='font-light text-sm text-slate-600 mt-4'>{pendingDeposit.length}</span>
              </div>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col h-full w-full justify-between'>
              <div className='flex w-full justify-between items-center'>
                <span className=' text-base font-light'>Total Deposits:</span>
                <span>${numberSeparator(totalDepositAmount, ",")}</span>
              </div>
              <div className='flex w-full justify-between items-center'>
                <span className='font-light text-sm text-slate-600 mt-4'>No:</span>
                <span className='font-light text-sm text-slate-600 mt-4'>{totalDeposit.length}</span>
              </div>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col h-full w-full justify-between'>
              <div className='flex w-full justify-between items-center'>
                <span className=' text-base font-light'>Pending Withdrawals:</span>
                <span>${numberSeparator(totalWithdrawalAmount, ",")}</span>
              </div>
              <div className='flex w-full justify-between items-center'>
                <span className='font-light text-sm text-slate-600 mt-4'>No:</span>
                <span className='font-light text-sm text-slate-600 mt-4'>{withdrawals.length}</span>
              </div>
            </div>
          </Card>
        </div>
        <div className='flex w-full justify-between items-center my-8'>
          <div>
            <h1 className=' font-black text-2xl'>Market Overview</h1>
            <span className='font-light text-sm text-slate-600'>Prices, Volume Updates</span>
          </div>
          <div className='border border-black text-sm font-normal rounded shadow-md'>
            <select name="" id="" className='p-1 rounded-sm'>
              <option value="a">Weekly (2023)</option>
            </select>
          </div>
        </div>
        <Card>
          <div className='flex justify-center items-center w-full font-light'>
            {/* ( " No Trading Data Available Please Subscribe to get Trading Data!") */}
            <div className='tradingview-widget-container'>
              <div id='tradingview_9bd40' />
              <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
              </div>
            </div>
          </div>
        </Card>
        <div className='flex w-full justify-between items-center my-8'>
          <div>
            <h1 className=' font-black text-2xl'>Recent Activities</h1>
            <span className='font-light text-sm text-slate-600'>Subscription Package</span>
          </div>
          <div className='border border-black text-sm font-normal rounded shadow-md'>
            <select name="" id="" className='p-1 rounded-sm'>
              <option value="a">Monthly (2023)</option>
            </select>
          </div>
        </div>
        <Card>
          <div className='flex justify-center items-center w-full font-light'>
            <marquee behavior="" direction="">
              Contact Us to Build Your Website, Broker, E-Commerce, NFT, Mobile Applications (Andriod and IOS), PortFolios, Courrier Services, Logistics.  WhatApp Line: +2349037289192
            </marquee>
          </div>
        </Card>
        <div className='py-8'></div>
      </div>
    </>
  )
}

export default AdminDashHome