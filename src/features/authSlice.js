import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
         },
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => { 
            state.user = null;
            state.isAuthenticated = true;
        }
    }
})

export const { register, login, logout } = authSlice.actions
export default authSlice;