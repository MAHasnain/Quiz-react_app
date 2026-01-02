import authReducer, { login, register, logout } from "./authSlice.js";
import questionReducer, { loadQuestions, questionSlice, resetQuiz, selectAnswer, nextQuestion } from "./questionSlice.js";
import resultReducer, { addAttemptedQuizId, resultSlice, calculateScore } from "./resultSlice.js";

export { authReducer, login, register, logout, questionReducer, loadQuestions, questionSlice, resetQuiz, selectAnswer, resultReducer, addAttemptedQuizId, resultSlice, nextQuestion, calculateScore };