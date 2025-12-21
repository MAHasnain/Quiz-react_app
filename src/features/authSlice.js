import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: () => { },
        login: () => { },
        logout: () => { }
    }
})

export const { register, login, logout } = authSlice.actions
export default authSlice;