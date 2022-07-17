import AuthNav from 'AuthNav/AuthNav';
import  HomeNav  from 'HomeNavigation/HomeNav';
import UserMenu from 'UserMenu';
import { getLoggedIn } from 'redux/auth';
import { useSelector } from 'react-redux';
import s from './NavBar.module.css';
// import ResponsiveAppBar from 'MIUAppBar/muiAppBar';

export default function NavBar() {
const LoggedIn = useSelector(getLoggedIn);
// const isLoading = useSelector(getIsLoading);

    return (  
        <header>
    <nav className={s.nav}>
        {/* <ResponsiveAppBar/> */}
        <HomeNav/>
        {!LoggedIn ? <AuthNav/> : <UserMenu/>}
        {/* {LoggedIn ? <UserMenu/> : <AuthNav/>} */}
       
        
    </nav>
    </header>

    )
   
}