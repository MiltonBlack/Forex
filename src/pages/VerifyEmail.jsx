import React,{useEffect} from 'react'
import mail from '../assets/mailsent.svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const VerifyEmail = () => {
  const navigate = useNavigate()
  const { emailVerified, email } = useSelector((state) => state.auth);
console.log(email, emailVerified);
useEffect(() => {
    if (emailVerified === true) {
      navigate('/dashboard');
    }
  }, [navigate]);
    // if (emailVerified) {
    //   return navigate('/dashboard');  
    // }
  return (
    <div className='w-screen h-screen bg-slate-700 flex items-center justify-center font-light'>
      <div className='border bg-white rounded-md p-4 flex items-center justify-center flex-col max-w-lg px-6'>
        <img src={mail} alt="" className=' h-40 w-40' />
        <h1 className=' font-medium text-3xl my-3'>Email Confirmation</h1>
        <span className=' text-sm text-center'>We Have Sent you an Email to <span className=' text-sky-800 font-medium'>{email}</span> to confirm the validity of your Email address. After Recieving the Email, follow the link provided to complete your registration.</span>
        <div className='border-t h-1 border-slate-200 w-full mt-4'></div>
        <div className='flex text-center text-sm'>
          <span>If you didn't get any email, <span>Resend Conformation Email</span>
            </span>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail