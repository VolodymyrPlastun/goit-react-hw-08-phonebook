import {  ListItem, ListItemAvatar, Avatar, IconButton, Typography } from '@mui/material';
import EditForm from 'EditForm';
import s from '../ContactListItem/ContactListItem.module.css';
import { PersonRemove} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {removeContact} from '../redux/contacts/contactsOperation';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const ContactListItem = ({id, name, number}) => {

    const dispatch = useDispatch();
    const deleteContact = () => {
      dispatch(removeContact(id));
      toast.success('Contact is deleted!')
    }
    return (
        <ListItem key={id}
                
                  secondaryAction={
                    <div className={s.modalBox}>
                      <EditForm name={name} number={number} id={id}/>
                    <IconButton sx={{ bgcolor: 'tomato'}} edge="end" aria-label="delete" onClick={deleteContact}>
                      <PersonRemove  sx={{ color: 'white'}}/>
                     
                    </IconButton>
                    </div>
                            }
                >
                   
                  <ListItemAvatar>
                    <Avatar sx={{bgcolor: 'tomato'}}>
                      {name.substring(0,1)}
                    </Avatar>
                  </ListItemAvatar>
                  <Typography sx={{color: 'darkviolet'}}>
                  {name}: <a className={s.link} href={`tel:${number}`}>{number}</a></Typography>
                </ListItem>
    )
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

export default ContactListItem;