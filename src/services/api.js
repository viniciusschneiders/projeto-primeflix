
// Base da URL: https://api.themoviedb.org/3/
// URL DA API: 

// api key: https://api.themoviedb.org/3/movie/now_playing?api_key=e532a21124bb56803222ed008a334199


import axios from 'axios';

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/'

})


export default api;

