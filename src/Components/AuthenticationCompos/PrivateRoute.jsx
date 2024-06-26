import { useContext } from "react"
import { authContext } from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute=({children})=>{

    const {user,loading} = useContext(authContext)
    const location = useLocation()


    if(loading){
        return <span className="loading loading-spinner loading-lg ml-[50%] "></span>

    }
   if(user){
    return children
   }

   else{ 
    return <Navigate state={location.pathname} to='/login'></Navigate>
   }
}


export default PrivateRoute