import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./asyncThunk";

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
            state.isAuthenticated = false;
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
            })
    }
})

export const { register, login, logout } = authSlice.actions
export default authSlice.reducer;