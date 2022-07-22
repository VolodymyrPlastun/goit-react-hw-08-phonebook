import { useSelector } from 'react-redux';
import { List, Box } from '@mui/material';
import ContactListItem from '../ContactListItem';

export default function ContactList() {
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
                <ContactListItem key={id} id={id} name={name} number={number}/>)}
            </List>}
     
</Box>
)
} 

