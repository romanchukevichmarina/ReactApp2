import { Navigate } from "react-router";
import { useContext } from "react";
import {AuthContext} from "./AuthProvider";

const RequireAuth = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user){
        return <Navigate to='/' />
    }
    return children;
}
export {RequireAuth}