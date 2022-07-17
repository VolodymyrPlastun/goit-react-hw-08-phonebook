import { createSlice } from "@reduxjs/toolkit";
import {register, login, logout, getCurrentUser} from './authOperations';

const initialState = {
    user: {name: null, email: null},
    token: null,
    loggedIn: false,
    isLoading: false,
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
    [logout.fulfilled](state, action) {
            state.user = {name: null, email: null};
            state.token = null;
            state.loggedIn = false;
        },
        [getCurrentUser.pending](state, action) {
            state.isLoading = true;

        },
[getCurrentUser.fulfilled](state, action) {
    state.user = action.payload;
    state.loggedIn = true;
    state.isLoading = false;
},
[getCurrentUser.rejected](state, action) {
    state.isLoading = false;

}
    },
});
const authReducer = authSlice.reducer;

export default authReducer;