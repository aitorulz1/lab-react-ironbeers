import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

export const getBeers = () => http.get('/').then(res => res.data);
export const getOneBeers = (id) => http.get(`/${id}`).then(res => res.data);
export const getRandomBeer = () => http.get(`/random`).then(res => res.data);
export const postNewBeer = () => http.post(`/new`).then(res => res.data);
export const getSearchBeer = (query) => http.get(`/search?q=${query}`).then(res => res.data);
