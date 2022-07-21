// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContact, removeContact, addContact, editContact } from "./contactsOperation";
// import {filterContaсts} from './contactsActions';

// const initialState = {
//     items: [],
//     filter: ''
// }

// const contactsSlice =  createSlice({
//     name: "contacts",
//     initialState,
//     extraReducers: {
// [fetchContact.fulfilled](_, action) {
//     return action.payload;
// },
// [removeContact.fulfilled](state, action) {
//     return state.filter(({id}) => id !== action.payload)
//     // const contactId = action.payload;
//     //   const idx = state.contacts.findIndex((item) => item.id === contactId);
//     //   state.contacts.splice(idx, 1);
//     },
//     [addContact.fulfilled](state, action) {
//         state.contacts.push(action.payload);
//     },
//     [editContact.fulfilled](state, action) {
//     const obj = state.filter(({id}) => id !== action.payload.id)
//     return [action.payload, ...obj]
//     },
//     [filterContaсts.fulfilled](state, action) {
//         state.filter = action.payload;
//     }
// },
// });

// const contactsReducer = contactsSlice.reducer;

// export default contactsReducer;