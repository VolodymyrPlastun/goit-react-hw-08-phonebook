import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContact = createAsyncThunk('contacts/fetchContact',
async (_, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/contacts`);

    return data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const addContact = createAsyncThunk('contacts/addContact',
async (contact, {rejectWithValue}) => {
    try {
        const {data} = await axios.post(`/contacts`, contact);

        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const removeContact = createAsyncThunk('contacts/removeContact',
    async (id, {rejectWithValue}) => {
        try {
           await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const editContact = createAsyncThunk('contacts/editContact',
async ({id, name, number, rejectWithValue}) => {

    try {
      const {data} = await axios.patch(`/contacts/${id}`, {name, number});
        return data;
    } catch (error) {
        rejectWithValue(error);
    }
})



