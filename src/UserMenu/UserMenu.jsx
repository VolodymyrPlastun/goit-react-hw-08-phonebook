import { useSelector, useDispatch } from "react-redux";
import { getUserEmail, getUserName } from "redux/auth/authSelectors";
import s from './UserMenu.module.css';
import { Logout } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { logout } from "redux/auth/authOperations";

const UserMenu = () => {
    const userEmail = useSelector(getUserEmail);
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();


    return (
        <div className={s.box}>
            <Avatar className={s.avatar} sx={{ bgcolor: deepOrange[500] }}>{userEmail.substring(0, 1)}</Avatar>
            <Typography sx={{marginRight: '10px', color: 'tomato'}}>Добро пожаловать,</Typography>
            <Typography sx={{marginRight: '10px', color: 'darkviolet'}}>{userName}</Typography>
            <Button variant="contained" sx={{color: 'white', bgcolor: 'tomato'}} color='warning' endIcon={<Logout/>} onClick={() => dispatch(logout())}>Log out</Button>
        </div>
    )
};

export default UserMenu;