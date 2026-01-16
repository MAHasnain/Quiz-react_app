// DB methods 

import config from "../config/config.js";
const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = config;

import { createClient } from '@supabase/supabase-js'
// import { getCurrentUser, getUserResults } from "./index.js";

// Create a single supabase client for interacting with your database
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

// QUIZZES DB methods
export const getAllQuizzes = async () => {

    // const currentUser = await getCurrentUser();
    // console.log(currentUser.id);
    
    // const results = await getUserResults(currentUser.id);
    // console.log(results);

    const { data, error } = await supabase
        .from('quizzes')
        .select()

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data;
}

export const getCompletedQuizIds = async (userId) => {
    const { data, error } = await supabase
        .from('quizzes')
        // .eq('id', userId)
        .select(userId)

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data;
}