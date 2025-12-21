import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    selectedAnswer: {},
    currentIndex: 0
}

export const questionSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        loadQuestions: () => { },
        selectAnswer: () => { },
        nextQuestion: () => { },
        resetQuiz: () => { }
    }
})

export const { loadQuestions, selectAnswer, nextQuestion, resetQuiz } = questionSlice.actions
export default questionSlice;