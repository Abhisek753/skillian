
import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRouteUser = ({children}) => {
    const auth=localStorage.getItem("isAuthenticated");
    const role=localStorage.getItem("role");

    if(auth==false || role!=="user"){
        return <Navigate to="/login"/>
        
    }else{
        return children;
    }
 
}

export default ProtectedRouteUser;