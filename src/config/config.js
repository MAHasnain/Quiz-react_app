// CREDENTIALS FOR SUPABASE DATABASE CONNECTION

const config = {
    VITE_SUPABASE_URL: String(import.meta.env.VITE_SUPABASE_URL),
    VITE_SUPABASE_KEY: String(import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY)
}

export default config;