import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

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
async (credentials ) => {
    try {
        const {data} = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
       toast.error('Try to enter another name or email');
    }
});

export const login = createAsyncThunk('auth/login', 
async (credentials) => {
    try {
        const {data} = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
       toast.error('Check your email or password and try again');
    }
});

export const logout = createAsyncThunk('auth/logout', 
async (_, {rejectWithValue}) => {
    try {
    await axios.post('/users/logout');
    token.unset();
     toast.success('See You later!');   
    } catch (error) {
        rejectWithValue(error);
    }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser',
async (_, thunkAPI) => {

const state = thunkAPI.getState();
const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
        const {data} = await axios.get('/users/current');
        return data;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
})

