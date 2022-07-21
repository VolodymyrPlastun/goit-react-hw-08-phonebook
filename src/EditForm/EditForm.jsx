import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, IconButton} from "@mui/material";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { editContact } from "redux/contacts/contactsOperation";

const EditForm = ({name, number, id}) => {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeContacts = (evt) => {
    evt.preventDefault();
dispatch(editContact({id, name: newName, number: newNumber}));
setOpen(false);
  }

  const handleNameChange = evt => {
    setNewName(evt.target.value);
  }
  
  const handleNumberChange = evt => {
    setNewNumber(evt.target.value);
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <IconButton sx={{ bgcolor: 'tomato', marginRight: '10px' }} onClick={handleClickOpen} aria-label="edit"> <Edit sx={{ color: 'white'}}/></IconButton>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>Edit your contact</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            value={newName}
            onChange={handleNameChange}
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
                    <TextField
            value={newNumber}
            onChange={handleNumberChange}
            margin="dense"
            id="number"
            label="Number"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{color: 'white', bgcolor: 'tomato'}} color='warning' variant="contained" onClick={handleClose}>Cancel</Button>
          <Button sx={{color: 'white', bgcolor: 'tomato'}} color='warning' variant="contained" type='submit' onClick={changeContacts}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditForm;
/* <form className={s.form} */
//       onSubmit={handleSubmit}
//   >

//   <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
// <InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-name" >Name</InputLabel>
// <OutlinedInput
// sx={{color: 'darkviolet'}}
// color='secondary'
//   id="outlined-adornment-name"
//   type='text'
//   value={name}
//   onChange={handleNameChange}
//   label="Name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />
// </FormControl>      
// <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
// <InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-number">Number</InputLabel>
// <OutlinedInput
// sx={{color: 'darkviolet'}}
// color='secondary'
//   id="outlined-adornment-number"
//   type='number'
//   value={number}
//   onChange={handleNumberChange}
//   label="Number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// required
// />
// </FormControl> 
// <div className={s.btn}>
// <Button sx={{color: 'white', bgcolor: 'tomato'}} color='warning'  type="submit" variant="contained">Add contact</Button>  
// </div>     
// </form> 