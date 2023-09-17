import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAccountAdmin, updateSecurityAdmin } from '../../services/adminSlice';
import { Snackbar, Alert, Slide, CircularProgress } from '@mui/material';

const AdminSettings = () => {
    const dispatch = useDispatch();
    const { admin, updated, updatedAcct } = useSelector((state) => state.admin);
    const [dataPass, setDataPass] = useState({
        password: ''
    });
    const [dataAcct, setDataAcct] = useState({
        walletAddress: admin.walletAddress
    })
    function updatePassword() {
        dispatch(updateSecurityAdmin(dataPass));
    }
    function updateAccount() {
        dispatch(updateAccountAdmin(dataAcct));
    }
    function onChangePass(e) {
        setDataPass((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    function onChangeAcct(e) {
        setDataAcct((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
      };
    return (
        <>
            <div className='pt-16 bg-stone-100 px-10 h-[100vh] relative'>
                <Snackbar autoHideDuration={4000} open={updated} onClose={handleClose} TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                    <Alert sx={{ width: '100%' }} severity='success' >
                        Password Updated Successfully!!
                    </Alert>
                </Snackbar>
                <Snackbar autoHideDuration={4000} open={updatedAcct} onClose={handleClose}  TransitionComponent={Slide} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                    <Alert sx={{ width: '100%' }} severity='success' >
                        Wallet Address Updated Successfully!!
                    </Alert>
                </Snackbar>
                <div className='my-4 flex flex-col mb-4'>
                    <h1 className='text-2xl font-extrabold my-2'>Your Personnal Settings</h1>
                    <span className='font-light text-sm text-slate-600'>Modify and customize the app to your Taste</span>
                </div>
                <div className='my-4 font-normal grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                    <div className='p-4 md:w-full w-[80%]'>
                        <div className='my-4'>
                            <h1>Old Password</h1>
                            <input
                                type="text"
                                className='border px-2 rounded my-1 w-full border-black'
                                name='OldPassword'
                            />
                        </div>
                        <div className='my-4'>
                            <h1>New Password</h1>
                            <input
                                type="text"
                                className='border px-2 rounded my-1 w-full border-black'
                                name='password'
                                onChange={onChangePass}
                                value={dataPass.password}
                            />
                        </div>
                        <div className='my-4'>
                            <h1>Confirm New Password</h1>
                            <input
                                type="text"
                                className='border px-2 rounded my-1 w-full border-black'
                                name='confirmPassword'
                            />
                        </div>
                        <button className='border p-2 w-full bg-black/75 text-white rounded' onClick={updatePassword} >{updated? <CircularProgress/> : "Save"}</button>
                    </div>
                    <div className='p-4 md:w-full w-[80%]'>
                        <div className='my-4'>
                            <h1>Network Type</h1>
                            <input type="text" className='border rounded px-2 my-1 w-full border-black' name='walletType' readOnly />
                        </div>
                        <div className='my-4'>
                            <h1>Bitcoin Address</h1>
                            <input type="text" className='border px-2 rounded my-1 w-full border-black' name='walletAddress' onChange={onChangeAcct} value={dataAcct.walletAddress} />
                        </div>
                        <button className='border p-2 w-full bg-black/75 text-white rounded' onClick={updateAccount}>{updatedAcct? <CircularProgress/> : "Save"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSettings