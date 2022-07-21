import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import {token } from "../../token/token";

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
        const {data} = await axios.post('/users/signup', credentials);
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
});

export const logout = createAsyncThunk('auth/logout', 
async (_, {rejectWithValue}) => {
    try {
    await axios.post('/users/logout');
    token.unset();
    } catch (error) {
        rejectWithValue(error);
    }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser',
async (_, thunkAPI) => {

const state = thunkAPI.getState();
const persistedToken = state.auth.token;
console.log(persistedToken);
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

