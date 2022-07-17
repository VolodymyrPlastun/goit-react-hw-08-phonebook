import { NavLink } from 'react-router-dom';
import s from '../NavBar/NavBar.module.css';

const AuthNav = () => {
    return (
    <div>
<NavLink className={({isActive}) => isActive ? s.active : s.link} to="/register">Sign up</NavLink>
<NavLink className={({isActive}) => isActive ? s.active : s.link} to="/login">Sign in</NavLink>
    </div>
    )
};

export default AuthNav;