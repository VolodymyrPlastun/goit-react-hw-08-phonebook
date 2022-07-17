import { useState } from 'react';
import s from '../ContactForm/ContactForm.module.css';
import {  useDispatch } from 'react-redux';
// import { addContact} from '../redux/contactsOperation';
import { register } from '../redux/auth/authOperations';
import { FormControl, InputLabel, OutlinedInput, Button, Box} from '@mui/material';


export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const contacts = useSelector(state => state.contacts.items);


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

      return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <div className={s.container}>
            <h1 className={s.title}>Register page</h1>
            <form className={s.form}
                onSubmit={handleSubmit}
            >
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel color='secondary' htmlFor="outlined-adornment-name" >Name</InputLabel>
          <OutlinedInput
          color='secondary'
            id="outlined-adornment-name"
            type='text'
            value={name}
            onChange={handleNameChange}
            label="Name"
          />
          </FormControl>
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
          
            id="outlined-adornment-password"
            type='password'
            value={password}
            onChange={handlePasswordChange}
            label="Password"
          />
        </FormControl> 
        <div className={s.btn}>
        <Button color='error'  type="submit" variant="outlined">Sign up</Button>  
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