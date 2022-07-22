import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton} from "@mui/material";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { editContact } from "redux/contacts/contactsOperation";
import PropTypes from 'prop-types';


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
    if(name === newName && number === newNumber) {
      return alert('You need to change contact')
    }
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
      <IconButton sx={{ bgcolor: 'tomato', marginRight: '10px' }} onClick={handleClickOpen} aria-label="edit"> <Edit sx={{ color: 'white'}}/></IconButton>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>Edit your contact</DialogTitle>
        <DialogContent>
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

EditForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

export default EditForm;
