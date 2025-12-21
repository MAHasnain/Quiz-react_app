import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    score: 0,
    attemptedQuizIds: []
}

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        setScore: () => { },
        addAttemptedQuizId: () => { }
    }
})

export const { addAttemptedQuizId, setScore } = resultSlice.actions
export default resultSlice;