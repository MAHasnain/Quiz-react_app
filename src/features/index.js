import authReducer, { login, register, logout } from "./authSlice.js";
import questionReducer, { loadQuestions, questionSlice, resetQuiz, selectAnswer } from "./questionSlice.js";
import resultReducer, { addAttemptedQuizId, resultSlice } from "./resultSlice.js";

export { authReducer, login, register, logout, questionReducer, loadQuestions, questionSlice, resetQuiz, selectAnswer, resultReducer, addAttemptedQuizId, resultSlice };