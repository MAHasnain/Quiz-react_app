// 

import { createClient } from '@supabase/supabase-js'

import config from "../config/config.js";
const { VITE_SUPABASE_URL, VITE_SUPABASE_KEY } = config;

// Create a single supabase client for interacting with your database
const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

const createNewUser = async (userData) => {

    const { data, error } = await supabase.auth.signUp(
        userData
        // {
        //     email: 'example@email.com',
        //     password: 'example-password',
        //     options: {
        //         data: {
        //             first_name: 'John',
        //             age: 27,
        //         }
        //     }
        // }
    )

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data

}

const signInUser = async (userData) => {

    const { data, error } = await supabase.auth.signInWithPassword(
        userData
        // {
        //     email: 'example@email.com',
        //     password: 'example-password',
        // }
    )

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data

}

const retrieveSession = async () => {

    const { data, error } = await supabase.auth.getSession()

    if (error) {
        console.error(error);
        return error;
    }

    console.log(data);
    return data

}

const getCurrentUser = async () => {

    const { data: { user } } = await supabase.auth.getUser()

    // if (error) {
    //     console.error(error);
    //     return error;
    // }

    console.log(user);
    return user

}

const signOutUser = async () => {

    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error(error);
        return { error };
    }

    // console.log(data);
    // return data

}

export { createNewUser, signInUser, signOutUser, retrieveSession, getCurrentUser };