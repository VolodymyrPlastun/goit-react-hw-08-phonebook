import {  ListItem, ListItemAvatar, Avatar, IconButton, List, Box, Typography } from '@mui/material';
import EditForm from 'EditForm/EditForm';
import s from '../ContactListItem/ContactListItem.module.css';
import { PersonRemove, ContactPhoneOutlined} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {removeContact} from '../redux/contacts/contactsOperation';
import { useState } from 'react';

const ContactListItem = ({id, name, number}) => {

    const dispatch = useDispatch();
    return (
        <ListItem key={id}
                
                  secondaryAction={
                    <div className={s.modalBox}>
                      <EditForm name={name} number={number} id={id}/>
                    <IconButton sx={{ bgcolor: 'tomato'}} edge="end" aria-label="delete" onClick={() => dispatch(removeContact(id))}>
                      <PersonRemove  sx={{ color: 'white'}}/>
                     
                    </IconButton>
                    </div>
                            }
                >
                   
                  <ListItemAvatar>
                    <Avatar sx={{bgcolor: 'tomato'}}>
                      <ContactPhoneOutlined />
                    </Avatar>
                  </ListItemAvatar>
                  <Typography sx={{color: 'darkviolet'}}>
                  {name}: <a className={s.link} href={`tel:${number}`}>{number}</a></Typography>
                </ListItem>
    )
}

export default ContactListItem;