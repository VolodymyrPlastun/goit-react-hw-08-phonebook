// import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {removeContact} from '../redux/contacts/contactsOperation';
import {  ListItem, ListItemAvatar, Avatar, IconButton, List, Box, Typography } from '@mui/material';
import { PersonRemoveOutlined, ContactPhoneOutlined} from '@mui/icons-material';

export default function ContactList() {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const normalizedStr = filter.toLocaleLowerCase();

    const filteredContacts = () => {
        return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedStr))
    }

    const visibleContacts =  filteredContacts();
    return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', }}>
            {visibleContacts.length !== 0 && <List sx={{width: '50ch'}}>
                {visibleContacts.map(({id, name, number}) => <ListItem key={id}
                
                  secondaryAction={
                    <IconButton sx={{bgcolor: 'tomato', color: 'secondary'}} edge="end" aria-label="delete">
                      <PersonRemoveOutlined  onClick={() => dispatch(removeContact(id))}/>
                    </IconButton>
                  }
                >
                   
                  <ListItemAvatar>
                    <Avatar sx={{bgcolor: 'tomato'}}>
                      <ContactPhoneOutlined />
                    </Avatar>
                  </ListItemAvatar>
                  <Typography sx={{color: 'darkviolet'}}>
                  {name}: {number}</Typography>
                  {/* <p></p> */}
                  {/* <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  /> */}
                </ListItem>)}
            </List>}
            

     
</Box>
)
} 

//             <ul className={s.list}>
//             {visibleContacts.map(({id, name, number}) => <li key={id} className={s.item}>
//              <p>{name}: {number}</p>
//              <Button color='secondary' onClick={() => dispatch(removeContact(id))}  type="button" variant="outlined">Delete</Button>  
//              {/* <button className={s.btn} onClick={() => dispatch(removeContact(id))} type="button">Delete</button> */}
//          </li>)}
         
            
//  </ul>}