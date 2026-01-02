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
    }
})

export const { addAttemptedQuizId, setScore, resetResult, calculateScore } = resultSlice.actions
export default resultSlice.reducer;