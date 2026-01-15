import { createSlice } from "@reduxjs/toolkit";
import { submitQuizResult } from "./asyncThunk";

const initialState = {
    score: 0,
    attemptedQuizIds: []
}

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        setScore: (state, action) => {
            state.score = action.payload
        },
        addAttemptedQuizId: (state, action) => {
            const quizId = action.payload

            if (!state.attemptedQuizIds.includes(quizId)) {
                state.attemptedQuizIds.push(quizId)
            }
        },
        calculateScore: (state, action) => {
            const { questions, selectedAnswers } = action.payload;

            let score = 0;

            questions?.forEach((ques, index) => {
                if (selectedAnswers[index] === ques.correct_answer) {
                    score += 1;
                }
            });

            state.score = score;
            console.log(state.score);
        },
        resetResult: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(submitQuizResult.fulfilled, (state, action) => {
            state.score = action.payload
        })
    }
})

export const { addAttemptedQuizId, setScore, resetResult, calculateScore } = resultSlice.actions
export default resultSlice.reducer;