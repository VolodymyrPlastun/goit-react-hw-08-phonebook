import {  Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedIn } from "../redux/auth/authSelectors";

const PrivateRoutes = ({children, redirectTo = "/login"}) => {
const isLoggedIn = useSelector(getLoggedIn);
return isLoggedIn ? children : <Navigate to={redirectTo} />

};

export default PrivateRoutes;