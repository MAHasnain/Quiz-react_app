import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkQuizAttempt, createNewUser, signInUser, retrieveSession, getCompletedQuizIds, getQuizQuestions, saveQuizResult, getUserResults, signOutUser, getAllQuizzes } from "../Supabase";

// AUTH
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (credentials, thunkAPI) => {
        try {
            const user = await createNewUser(credentials);
            return user

        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, thunkAPI) => {
        try {
            const user = await signInUser(credentials);
            return user;

        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const checkSession = createAsyncThunk(
    'auth/checkSession',
    async (_, { rejectWithValue }) => {
        try {

            const session = await retrieveSession();
            return session;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {

            const res = await signOutUser();

            if (res?.error) {
                console.log(res?.error);
                return rejectWithValue(res.error.message)
            }

            return true;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
)

// QUESTIONS
export const fetchQuestionsByQuizId = createAsyncThunk(
    "question/fetchQuizById",
    async (quizId, { rejectWithValue }) => {
        try {

            const fetchQuestions = await getQuizQuestions(quizId);
            console.log(fetchQuestions);
            return fetchQuestions;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message)
        }
    }
);

// QUIZES
export const fetchAttemptedQuiz = createAsyncThunk(
    "quiz/fetchAttemptedQizes",
    async (userId, { rejectWithValue }) => {
        try {

            const fetchCompletedQuiz = await getCompletedQuizIds(userId);
            console.log(fetchCompletedQuiz);
            return fetchCompletedQuiz;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

export const fetchAllQuizzes = createAsyncThunk(
    "quiz/fetchAllQuizzes",
    async (_, { rejectWithValue }) => {
        try {
            const allQuizzes = await getAllQuizzes();
            console.log(allQuizzes);
            return allQuizzes;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

// RESULT
export const checkAttempt = createAsyncThunk(
    "result/checkAttempts",
    async ({ userId, quizId }, { rejectWithValue }) => {
        try {

            const attemptsQuiz = await checkQuizAttempt(userId, quizId);
            console.log(attemptsQuiz);
            return attemptsQuiz;

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const submitQuizResult = createAsyncThunk(
    "result/saveResult",
    async (payload, { rejectWithValue }) => {
        try {
            const savedResult = await saveQuizResult(payload);
            console.log(savedResult);
            return savedResult;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

export const fetchUserResults = createAsyncThunk(
    "result/fetchResults",
    async (userId, { rejectWithValue }) => {
        try {

            const userResults = await getUserResults(userId);
            console.log(userResults);
            return userResults

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)