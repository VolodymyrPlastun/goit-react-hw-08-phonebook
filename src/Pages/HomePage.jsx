import { Button, Box, Link } from "@mui/material";
import s from './Pages.module.css';
import { getLoggedIn, getUserName } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const LoggedIn = useSelector(getLoggedIn);
const UserName = useSelector(getUserName);
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
    <div className={s.container}>
      <h1 className={s.title}>Your personal App for saving contacts</h1>
      <div>{!LoggedIn ? 
      <div>
      <p className={s.description}>Enter account or register</p>
            <div className={s.buttonBox}>
            <Button sx={{color: 'white', bgcolor: 'tomato', marginRight: '10px'}} color='warning'  type="submit" variant="contained" href="/goit-react-hw-08-phonebook/login">Sign in</Button>  
            <Button sx={{color: 'white', bgcolor: 'tomato'}} color='warning'  type="submit" variant="contained" href="/goit-react-hw-08-phonebook/register">Sign up</Button>  
            </div></div>
            : <div> <h2 className={s.description}>Hello, {UserName}</h2>
            <Link className={s.link} href='contacts' sx={{marginBottom: "20px", display: 'flex', justifyContent: 'center'}}>You can add your contacts here</Link></div>}
            </div>
    </div>
    </Box>
  )
}





