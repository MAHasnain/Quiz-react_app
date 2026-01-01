import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestionsByQuizId } from "./asyncThunk";

const initialState = {
    questions: [],
    selectedAnswers: {},
    currentIndex: 0
}

export const questionSlice = createSlice({
    name: "questions",
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
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchQuestionsByQuizId.fulfilled, (state, action) => {
            state.questions = action.payload;
        })
    }
})

export const { loadQuestions, selectAnswer, nextQuestion, resetQuiz } = questionSlice.actions
export default questionSlice.reducer;