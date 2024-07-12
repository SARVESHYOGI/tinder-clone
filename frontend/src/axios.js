import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://tinder-clone-chi.vercel.app/'
    baseURL: 'http://localhost:8000/'
});

export default instance;