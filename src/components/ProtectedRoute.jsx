import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoute = ({authenticated}) => {

  

    if (authenticated) {
        return <Outlet />
    }
    else {
        return <Navigate to='/login' />
    }
   
   
    




}
