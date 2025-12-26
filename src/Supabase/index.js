import { createNewUser, getCurrentUser, retrieveSession, signInUser, signOutUser } from "./auth.database.js";
import { getAllQuizzes, getCompletedQuizIds } from "./quizes.database.js";
// import { fetchQuizQuestions } from "./questions.database.js";
import { getQuizQuestions } from "./questions.database.js";
import {
    getUserResults,
    checkQuizAttempt,
    saveQuizResult
} from "./results.database.js";

export { createNewUser, signInUser, signOutUser, retrieveSession, getCurrentUser, getAllQuizzes, getQuizQuestions, getUserResults, checkQuizAttempt, saveQuizResult, getCompletedQuizIds };