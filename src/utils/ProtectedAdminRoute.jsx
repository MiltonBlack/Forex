import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedAdminRoute = () => {
    const { admin } = useSelector((state) => state.admin);
  return (
        <div>
            {admin ? <Outlet/> : <Navigate to="auth/admin/login" /> }
        </div>
    )
}

export default ProtectedAdminRoute