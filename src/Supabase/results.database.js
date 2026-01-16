import config from "../config/config.js";
const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = config;

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

// RESULTS DB methods
export const getUserResults = async (userId) => {
    const { data, error } = await supabase
        .from('results')
        .select()

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data;
}

export const checkQuizAttempt = async (userId, quizId) => {  /// check quiz attempt 
    const { data, error } = await supabase
        .from('results')
        .select()
        .eq("userId", userId)
        .eq("quizId", quizId)
        .single()

    if (error && error.code === "PGRST116") {
        return false;
    }

    if (error) {
        console.error(error);
    }

    console.log(data);
    return true;

}

export const saveQuizResult = async (quizResult) => {
    const { data, error } = await supabase
        .from('results')
        .insert(quizResult)
        .select()

    if (error) {
        console.error(error);
    }

    console.log(data);
    return data;

}
