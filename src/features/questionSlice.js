import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    selectedAnswers: {},
    currentIndex: 0
}

export const questionSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        loadQuestions: (state, action) => {
            state.questions.push(action.payload);
        },
        selectAnswer: (state, action) => {
            const { answer } = action.payload;
            const index = state.currentIndex;
            state.selectedAnswers[index] = answer;
        },
        nextQuestion: (state) => {
            if (state.currentIndex < state.questions.length - 1) {
                state.currentIndex += 1;
            }
        },
        resetQuiz: (state) => {
            state.selectedAnswers = {};
            state.currentIndex = 0
        }
        // resetQuiz: () => initialState
    }
})

export const { loadQuestions, selectAnswer, nextQuestion, resetQuiz } = questionSlice.actions
export default questionSlice.reducer;