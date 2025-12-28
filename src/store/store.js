import { configureStore } from "@reduxjs/toolkit";
import { questionReducer, resultReducer } from "../features";
import authReducer from "../features/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        question: questionReducer,
        result: resultReducer
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})
