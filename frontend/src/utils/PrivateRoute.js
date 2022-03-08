import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children}) => {
    let {user} = useContext(AuthContext)
    return(
        <div>
            <Routes>
                <Route path="/*" element={!user ? <Navigate to="/login" /> : children} />
            </Routes>
        <Outlet />
        </div>
        )
}

export default PrivateRoute;