import { useState } from 'react';
import s from './Pages.module.css';
import { useDispatch } from 'react-redux';
import { login} from '../redux/auth/authOperations';
import {FormControl, InputLabel, OutlinedInput, Button, Box, Link, InputAdornment, IconButton} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
//   const contacts = useSelector(state => state.contacts.items);


  const handleSubmit = evt => {
    evt.preventDefault();
    // if (contacts.find(
    //         contact => contact.name.toLowerCase() === name.toLowerCase()
    //       )) {
    //         return alert(`${name} is already in contacts`);
    //       }
      dispatch(login({email, password}))
      reset();
  };

    const reset = () => {
      setEmail('');
      setPassword('');
  };

  const handlePasswordChange = evt => {
    setPassword(evt.target.value);
  }

  
  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  }

  const handleClickShowPassword = () => {
setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


      return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <div className={s.container}>
            <h1 className={s.title}>Enter your phonebook</h1>
            <form className={s.form}
                onSubmit={handleSubmit}
            >

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-email" >Email</InputLabel>
          <OutlinedInput sx={{color: 'darkviolet'}}
          color='secondary'
            id="outlined-adornment-email"
            type='email'
            value={email}
            onChange={handleEmailChange}
            label="Email"
            required
            autoFocus
          />
        </FormControl>      
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput sx={{color: 'darkviolet'}}
          color='secondary'
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            required
          />
        </FormControl> 
        <div className={s.btn}>
          <Link className={s.link} href='register' sx={{marginBottom: "20px"}}>Don't have an account? Click here!</Link>
        <Button sx={{color: 'white', bgcolor: 'tomato'}} color='warning'  type="submit" variant="contained">Sign in</Button>  
        </div>     
          </form> 
          </div>
          </Box>
        )
}
