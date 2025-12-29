import { createSlice } from "@reduxjs/toolkit";
import { fetchAllQuizzes, fetchAttemptedQuiz } from "./asyncThunk";

const initialState = {
    quizzes: [],
    attemptedQuizId: [],
    error: null
}

export const quizSlice = createSlice({
    name: "qiuz",
    initialState,
    reducers: {
        clearQuizzes: (state) => {
            state.quizzes = [];
            state.attemptedQuizId = [];
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllQuizzes.fulfilled, (state, action) => {
                state.quizzes = action.payload;
                state.error = null
            })
            .addCase(fetchAllQuizzes.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(fetchAttemptedQuiz.fulfilled, (state, action) => {
                state.attemptedQuizId = action.payload;
            })
            .addCase(fetchAttemptedQuiz.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});

export const { clearQuizzes } = quizSlice.actions;
export default quizSlice.reducer;