import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionReducer, resultReducer } from "../features";
import authReducer from "../features/authSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import quizReducer from "../features/quizSlice.js";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["auth"]
}

const rootReducer = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
)

export const store = configureStore({
    reducer: {
        persistedReducer,
        question: questionReducer,
        result: resultReducer,
        quiz: quizReducer
    },

    middleware: (defaultMiddleware) =>
        defaultMiddleware({ serializableCheck: false }),



    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

export const persistor = persistStore(store)