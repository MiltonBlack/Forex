import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function PrivateRoute() {
    const location = useLocation()
    console.log(location);
    let userid = localStorage.getItem('user') !== null ? true : false;
    return (
        <div>
            {userid ? <Outlet/> : <Navigate to="login" />}
        </div>
    )
}