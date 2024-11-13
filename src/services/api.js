import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wwdyxpqlvlizwhtlvdag.supabase.co/rest/v1/',
    headers: {
        apikey: process.env.API_KEY, 
        authorization: `Bearer ${process.env.AUTH_TOKEN}`
    }
})