import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaBitcoin, FaChartLine, FaDollarSign, FaEthereum, FaPlus } from 'react-icons/fa'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { userProfile } from '../services/authSlice'

let tvScriptLoadingPromise;
const DashHome = () => {
  const dispatch = useDispatch();
  const { user, isLoading, User } = useSelector((state) => state.auth);
  const { email } = user;
  const [mail, setMail] = useState({
    email: email,
  });
  const onLoadScriptRef = useRef();
  const [data, setData] = useState(User);

  useEffect(
    () => {
      setData(user);
      dispatch(userProfile(mail));
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
  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <div className=' bg-stone-200 w-full h-full flex flex-col px-5 md:px-10 pt-16'>
        <div className='flex w-full justify-between items-center my-8'>
          <div>
            <h1 className=' font-black text-2xl'>Hello, {data.firstName}!</h1>
            <span className='font-light text-sm text-slate-600'>We recommend you to select a subscription package for an investment plan today</span>
          </div>
          <div className='border border-black p-1 bg-rose-500'>
            <FaPlus color='white' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[5%]'>
          <Card>
            <div className='flex w-full justify-between'>
              <div className='flex flex-col h-full justify-between'>
                <FaBitcoin size={40} />
                <span>0 BTC</span>
                <span className='font-light text-sm text-slate-600'>25% This week</span>
              </div>
              <div className='flex flex-col h-full justify-between'>
                <FaChartLine size={28} />
                <FaArrowAltCircleUp size={35} color='green' />
              </div>
            </div>
          </Card>
          <Card>
            <div className='flex w-full justify-between'>
              <div className='flex flex-col h-full justify-between'>
                <FaDollarSign size={40} className='my-2' />
                <span>0 USDT</span>
                <span className='font-light text-sm text-slate-600'>+2% This week</span>
              </div>
              <div className='flex flex-col h-full justify-between'>
                <FaChartLine size={28} />
                <FaArrowAltCircleUp size={35} color='green' />
              </div>
            </div>
          </Card>
          <Card>
            <div className='flex w-full justify-between'>
              <div className='flex flex-col h-full justify-between'>
                <FaEthereum size={40} />
                <span>0 ETH</span>
                <span className='font-light text-sm text-slate-600'>+2% This week</span>
              </div>
              <div className='flex flex-col h-full justify-between'>
                <FaChartLine size={28} />
                <FaArrowAltCircleDown size={35} color='red' />
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
            {data.plan !== "None" ? `You are Currently Subscribed to the ${data.plan} Plan` : "Not Subscribed to any Packages"}
          </div>
        </Card>
        <div className='py-8'></div>
      </div>
      <Footer />
    </>
  )
}

export default DashHome