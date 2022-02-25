import { Route, Routes, Outlet, Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const isauthenticated = false
    return(
        <div>
            <Routes>
                <Route path="/*" element={!isauthenticated ? <Navigate to="/login" /> : children} />
            </Routes>
        <Outlet />
        </div>
        )
}

export default PrivateRoute;