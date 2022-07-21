import { useState } from 'react';
import s from './Pages.module.css';
import {  useDispatch } from 'react-redux';
// import { addContact} from '../redux/contactsOperation';
import { register } from '../redux/auth/authOperations';
import { FormControl, InputLabel, OutlinedInput, Button, Box, Link, InputAdornment, IconButton} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';


export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = evt => {
    evt.preventDefault();
    // if (contacts.find(
    //         contact => contact.name.toLowerCase() === name.toLowerCase()
    //       )) {
    //         return alert(`${name} is already in contacts`);
    //       }
      dispatch(register({name, email, password}));
      reset();
  };

    const reset = () => {
      setName('');
      setEmail('');
      setPassword('');
  };

  const handlePasswordChange = evt => {
    setPassword(evt.target.value);
  }

  const handleNameChange = evt => {
    setName(evt.target.value);
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
            <h1 className={s.title}>Register account</h1>
            <form className={s.form}
                onSubmit={handleSubmit}
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-name" >Name</InputLabel>
          <OutlinedInput
          sx={{color: 'darkviolet'}}
          color='secondary'
            id="outlined-adornment-name"
            type='text'
            value={name}
            onChange={handleNameChange}
            label="Name"
            required
            autoFocus
          />
          </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-email" >Email</InputLabel>
          <OutlinedInput
          
          sx={{color: 'darkviolet'}}
          color='secondary'
            id="outlined-adornment-email"
            type='email'
            value={email}
            onChange={handleEmailChange}
            label="Email"
            required
          />
        </FormControl>      
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
         
          sx={{color: 'darkviolet'}}
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
        <Link className={s.link} href='login' sx={{marginBottom: "20px"}}>Already have an account? Click here!</Link>
        <Button sx={{color: 'white', bgcolor: 'tomato'}} color='warning'  type="submit" variant="contained">Sign up</Button>  
        </div>     
          {/* <label className={s.label}>Name
            <input className={s.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleNameChange}
              /></label>
            <label className={s.label}>Email
              <input className={s.input}
  type="email"
  name="email"
  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={email}
                onChange={handleEmailChange}
/>
            </label>
            <label className={s.label}>Password
            <input className={s.input}
  type="password"
  name="password"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={password}
                onChange={handlePasswordChange}
              /></label>
          <button className={s.btn} type="submit">Sign up</button> */}
          </form> 
          </div>
          </Box>
        )
}