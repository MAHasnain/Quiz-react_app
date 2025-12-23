import config from "../Config/config.js";
const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = config;

import { createClient } from '@supabase/supabase-js'
// import { fetchQuizzes } from "./index.js";

// Create a single supabase client for interacting with your database
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

// QUESTIONS DB methods
// export const fetchQuizQuestions = async () => {
//     const { data, error } = await supabase
//         .from('questions')
//         .select()

//     if (error) {
//         console.error(error);
//         return error;
//     }

//     console.log(data);
//     return data;
// }

export const getQuizQuestions = async (quizId) => {
    const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('quiz_id', quizId)

    if (error) {
        console.error(error);
        return error;
    };
    console.log(data);
    return data;
}