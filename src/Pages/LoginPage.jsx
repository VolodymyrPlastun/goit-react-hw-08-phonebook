import { useState } from 'react';
import s from '../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { login} from '../redux/auth/authOperations';
import {FormControl, InputLabel, OutlinedInput, Button, Box} from '@mui/material';
// import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
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


      return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <div className={s.container}>
            <h1 className={s.title}>Login page</h1>
            <form className={s.form}
                onSubmit={handleSubmit}
            >

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel color='secondary' htmlFor="outlined-adornment-email" >Email</InputLabel>
          <OutlinedInput
          color='secondary'
            id="outlined-adornment-email"
            type='email'
            value={email}
            onChange={handleEmailChange}
            label="Email"
          />
        </FormControl>      
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel color='secondary' htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          color='secondary'
            id="outlined-adornment-password"
            type='password'
            value={password}
            onChange={handlePasswordChange}
            label="Password"
          />
        </FormControl> 
        <div className={s.btn}>
        <Button color='secondary'  type="submit" variant="outlined">Sign in</Button>  
        </div>     
          </form> 
          </div>
          </Box>
        )
}
