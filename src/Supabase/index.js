import { createNewUser, getCurrentUser, retrieveSession, signInUser, signOutUser } from "./auth.database.js";
import { fetchQuizQuestions } from "./questions.database.js";
import { fetchQuizzes } from "./quizes.database.js";
import { fetchResults } from "./results.database.js";

export { createNewUser, signInUser, signOutUser, retrieveSession, getCurrentUser, fetchQuizQuestions, fetchQuizzes, fetchResults };