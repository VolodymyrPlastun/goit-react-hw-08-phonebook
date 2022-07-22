import { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact} from '../redux/contacts/contactsOperation';
import { getContacts } from 'redux/contacts/contactsSelectors';
import {FormControl, InputLabel, OutlinedInput, Button, Box} from '@mui/material';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);


  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(
            contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
          )) {
            return  toast.error(`${name} is already in contacts`);
          }
      dispatch(addContact({name, number}))
      reset();
      toast.success('Contact added successfully');
  };

    const reset = () => {
      setName('');
      setNumber('');
  };

  const handleNameChange = evt => {
    setName(evt.target.value);
  }
  
  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  }

return (

<Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
<div className={s.container}>
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
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
</FormControl>      
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
<InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-number">Number</InputLabel>
<OutlinedInput
sx={{color: 'darkviolet'}}
color='secondary'
  id="outlined-adornment-number"
  type='number'
  value={number}
  onChange={handleNumberChange}
  label="Number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>
</FormControl> 
<div className={s.btn}>
<Button sx={{color: 'white', bgcolor: 'tomato'}} color='warning'  type="submit" variant="contained">Add contact</Button>  
</div>     
</form> 
</div>
</Box>
        )
}
