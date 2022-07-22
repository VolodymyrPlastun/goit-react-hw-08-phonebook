import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {filterContaсts} from '../redux/contacts/contactsActions';
import {FormControl, InputLabel, OutlinedInput, Box} from '@mui/material';


export default function Filter() {
const value = useSelector(state => state.contacts.filter);
const dispatch = useDispatch();

const filterChange = (evt) => {
dispatch(filterContaсts(evt.currentTarget.value))
}
    return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
         <h1 className={s.title}>Filter your contacts</h1>   
        <FormControl sx={{ m: 1, width: '40ch', borderColor: 'tomato'}} variant="outlined">
        <InputLabel sx={{color: 'darkviolet'}} color='secondary' htmlFor="outlined-adornment-name" >Find contacts</InputLabel>
        <OutlinedInput
        sx={{color: 'darkviolet'}}
        color='secondary'
          id="outlined-adornment-name"
          type='text'
          value={value}
          onChange={filterChange}
        />
        </FormControl>  
        </Box>
);
} 
