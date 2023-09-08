import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    let userid = localStorage.getItem('user') !== null ? true : false;
    return (
        <div>
            {userid ? <Outlet/> : <Navigate to="login" />}
        </div>
    )
}