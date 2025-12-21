// DB methods 

import config from "../config/config.js";
const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = config;

import { createClient } from '@supabase/supabase-js'
import { fetchResults, getCurrentUser } from "./index.js";

// Create a single supabase client for interacting with your database
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

// QUIZZES DB methods
export const fetchQuizzes = async () => {
    
    const currentUser = await getCurrentUser();
    currentUser.id;
    const results = await fetchResults();
    results

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

