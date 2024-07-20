import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-1-pkko.onrender.com/'
});

export default instance;