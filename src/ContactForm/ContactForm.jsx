import { useState } from 'react';
import s from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact} from '../redux/contacts/contactsOperation';
import { getContacts } from 'redux/contacts/contactsSelectors';
import {FormControl, InputLabel, OutlinedInput, Button, Box} from '@mui/material';


export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
// console.log(contacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
          )) {
            return alert(`${name} is already in contacts`);
          }
      dispatch(addContact({name, number}))
      reset();
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
  {/* <h1 className={s.title}>Login page</h1> */}
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
<InputLabel color='secondary' htmlFor="outlined-adornment-number">Number</InputLabel>
<OutlinedInput
color='secondary'
  id="outlined-adornment-number"
  type='number'
  value={number}
  onChange={handleNumberChange}
  label="Number"
/>
</FormControl> 
<div className={s.btn}>
<Button color='secondary'  type="submit" variant="outlined">Add contact</Button>  
</div>     
</form> 
</div>
</Box>
        )
}


//         <>
//           <div className={s.container}>

//             <form className={s.form}
//                 onSubmit={handleSubmit}
//             >
//           <label className={s.label}>Name
//             <input className={s.input}
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 value={name}
//                 onChange={handleNameChange}
//               /></label>
//             <label className={s.label}>Number
//               <input className={s.input}
//   type="tel"
//   name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 value={number}
//                 onChange={handleNumberChange}
// />
//             </label>
//           <button className={s.btn} type="submit">Add contact</button>
//           </form> 
//           </div>
//                 </>
