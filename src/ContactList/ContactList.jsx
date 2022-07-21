// import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {removeContact} from '../redux/contacts/contactsOperation';
import {  ListItem, ListItemAvatar, Avatar, IconButton, List, Box, Typography } from '@mui/material';
import { PersonRemove, ContactPhoneOutlined} from '@mui/icons-material';
// import EditForm from 'EditForm/EditForm';
import ContactListItem from '../ContactListItem';

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
                {visibleContacts.map(({id, name, number}) => 
                <ContactListItem key={name} id={id} name={name} number={number}/>)}
            </List>}
            

     
</Box>
)
} 

