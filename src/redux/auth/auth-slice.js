import { createSlice } from "@reduxjs/toolkit";
import {register, login} from './auth-operations';

const initialState = {
    user: {name: null, email: null},
    token: null,
    loggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
    [register.fulfilled] (state, action) {
state.user = action.payload.user;
state.token = action.payload.token;
state.loggedIn = true;
        },
    [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loggedIn = true;   
    },
    },
});
const authReducer = authSlice.reducer;

export default authReducer;