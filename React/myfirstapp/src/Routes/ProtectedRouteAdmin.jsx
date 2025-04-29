import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRouteAdmin = ({children}) => {
    const auth=localStorage.getItem("isAuthenticated");
    const role=localStorage.getItem("role");
    console.log(auth,role)

    if(auth==false || role!=="admin"){
        
        console.log("fail")
        return <Navigate to="/login"/>
        
     } else{
    console.log("success")

        return children;
    }
 
}

export default ProtectedRouteAdmin;