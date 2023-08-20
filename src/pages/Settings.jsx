import React from 'react'
import Card from '../components/Card'
import { Outlet, Link } from 'react-router-dom'

const Settings = () => {
    return (
        <>
            <div className='pt-16 bg-stone-100 px-10 h-[100vh] relative'>
                <div className='my-4 flex flex-col mb-4'>
                    <h1 className='text-2xl font-extrabold my-2'>Your Personnal Settings</h1>
                    <span className='font-light text-sm text-slate-600'>Modify and customize the app to your Taste</span>
                </div>
                <div className='grid grid-cols-4 gap-4 uppercase text-center font-semibold text-lg'>
                    <Link to='/dashboard/settings'>
                        <Card>
                            Personnal
                        </Card>
                    </Link>
                    <Link to='/dashboard/settings/security'>
                        <Card>
                            Security
                        </Card>
                    </Link>
                    <Link to='/dashboard/settings/account'>
                        <Card>
                            Account
                        </Card>
                    </Link>
                    <Link to='/dashboard/settings/notifications'>
                        <Card>
                            Notifications
                        </Card>
                    </Link>
                </div>
                <div className='my-4 font-normal'>
                    <Card>
                        <Outlet />
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Settings