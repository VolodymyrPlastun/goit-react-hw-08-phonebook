import AuthNav from 'AuthNav/AuthNav';
import  HomeNav  from 'HomeNav/HomeNav';
import UserMenu from 'UserMenu';
import { getLoggedIn } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import s from './NavBar.module.css';

export default function NavBar() {
const LoggedIn = useSelector(getLoggedIn);

    return (  
        <header>
    <nav className={s.nav}>
        <HomeNav/>
        {!LoggedIn ? <AuthNav/> : <UserMenu/>}    
    </nav>
    </header>

    )
   
}