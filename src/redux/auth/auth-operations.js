import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

export const register = createAsyncThunk('auth/register', 
async (credentials, {rejectWithValue} ) => {
    try {
        const {data} = await axios.post('/users/singup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        rejectWithValue(error);
    }
});

export const login = createAsyncThunk('auth/login', 
async (credentials, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        rejectWithValue(error);
    }
})