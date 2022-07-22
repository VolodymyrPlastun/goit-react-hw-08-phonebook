import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedIn } from "../redux/auth/authSelectors";

const PublicRoutes = ({children, restricted = false, redirectTo = "/contacts"}) => {
    const isLoggedIn = useSelector(getLoggedIn);
  const  shouldRedirect = isLoggedIn && restricted;

    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoutes;