import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from '../HomeNav/HomeNav.module.css';
import { fetchContact } from 'redux/contacts/contactsOperation';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { useEffect } from 'react';

const HomeNav = () => {
    const LoggedIn = useSelector(getLoggedIn);
    const dispatch = useDispatch();
    
    useEffect(() => {
      if(LoggedIn) {
        dispatch(fetchContact())
      }
     
    }, [LoggedIn, dispatch])
    
    return (
        <div>
          <NavLink className={({isActive}) => isActive ? s.active : s.homeLink} to="/">Home</NavLink>
        {LoggedIn && <NavLink className={({isActive}) => isActive ? s.active : s.homeLink} to="/contacts">Contacts</NavLink>}

        </div>
    )
};

export default HomeNav;