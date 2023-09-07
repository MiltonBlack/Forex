import React from 'react'

const AdminSettings = () => {
    return (
        <>
            <div className='pt-16 bg-stone-100 px-10 h-[100vh] relative'>
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
                                name='password'
                                 />
                        </div>
                        <div className='my-4'>
                            <h1>New Password</h1>
                            <input
                                type="text"
                                className='border px-2 rounded my-1 w-full border-black'
                                name='newPassword'
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
                        <button className='border p-2 w-full bg-black/75 text-white rounded' >Save</button>
                    </div>
                    <div className='p-4 md:w-full w-[80%]'>
                        <div className='my-4'>
                            <h1>Network Type</h1>
                            <input type="text" className='border rounded px-2 my-1 w-full border-black' name='walletType' readOnly />
                        </div>
                        <div className='my-4'>
                            <h1>Bitcoin Address</h1>
                            <input type="text" className='border px-2 rounded my-1 w-full border-black' name='walletAddress' />
                        </div>
                        <button className='border p-2 w-full bg-black/75 text-white rounded' >Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSettings