import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from '../NavBar/NavBar.module.css';
import { fetchContact } from 'redux/contacts/contactsOperation';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { useEffect } from 'react';

const HomeNav = () => {
    // const contacts = useSelector(getContacts);
    const LoggedIn = useSelector(getLoggedIn);
    console.log(LoggedIn);
    const dispatch = useDispatch();
    
    useEffect(() => {
      if(LoggedIn) {
        dispatch(fetchContact())
      }
     
    }, [LoggedIn, dispatch])
    // onClick={() => dispatch(fetchContact())}
    return (
        <div>
        <NavLink className={({isActive}) => isActive ? s.active : s.link} to="/">Home</NavLink>
        {LoggedIn && <NavLink className={({isActive}) => isActive ? s.active : s.link} to="/contacts">Contacts</NavLink>}
        
        </div>
    )
};

export default HomeNav;