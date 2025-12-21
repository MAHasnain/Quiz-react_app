import { configureStore } from "@reduxjs/toolkit";
import { authReducer, questionReducer, resultReducer } from "../features";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        question: questionReducer,
        result: resultReducer
    }
})
