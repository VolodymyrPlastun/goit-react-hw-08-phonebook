import { NavLink } from 'react-router-dom';

import s from './NavBar.module.css';

export default function NavBar() {
    return (  
        <>
    <nav className={s.nav}>
        <NavLink className={({isActive}) => isActive ? s.active : s.link} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? s.active : s.link} to="/register">Sign up</NavLink>
        <NavLink className={({isActive}) => isActive ? s.active : s.link} to="/login">Login</NavLink>
    </nav>
            </>
    )
   
}