import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "redux/auth/authSelectors";
import s from './UserMenu.module.css';
import { Logout } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { logout } from "redux/auth/authOperations";

const UserMenu = () => {
    const userEmail = useSelector(getUserEmail);

    const dispatch = useDispatch();


    return (
        <div className={s.box}>
            <p className={s.text}>Добро пожаловать, 
            </p>
            <Avatar className={s.avatar} sx={{ bgcolor: deepOrange[500] }}>{userEmail.substring(0, 1)}</Avatar>
                        <Button variant="contained" color="primary" endIcon={<Logout/>} onClick={() => dispatch(logout())}>Log out</Button>
        </div>
    )
};

export default UserMenu;