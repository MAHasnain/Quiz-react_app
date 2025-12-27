import { createSlice } from "@reduxjs/toolkit";

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
        resetResult: () => initialState
    }
})

export const { addAttemptedQuizId, setScore, resetResult } = resultSlice.actions
export default resultSlice.reducer;