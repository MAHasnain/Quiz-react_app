import config from "../config/config.js";
const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = config;

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

// QUESTIONS DB methods
export const fetchQuizQuestions = async () => {
    const { data, error } = await supabase
        .from('questions')
        .select()

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data;
}

export const fetchQuestionByQuizId = async () => {
    
}