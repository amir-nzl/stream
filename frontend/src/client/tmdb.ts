import axios, {AxiosResponse} from 'axios';
import {TMDB_API_KEY, API_URLS, Genre, Network} from "./constants";

const config = {
    baseURL : 'https://api.themoviedb.org/3'
};

const instance = axios.create(config);

export const fetchTvShows = async (network : Network) : Promise<AxiosResponse>  =>  {
    const url = `${API_URLS.tvShows}?api_key=${TMDB_API_KEY}&with_network=${network}`;
    return await instance.get(url);
};

export const fetchMovies = async (genre : Genre) : Promise<AxiosResponse>=> {
    const url =  `${API_URLS.movies}?api_key=${TMDB_API_KEY}&with_genres=${genre}`;
    return await instance.get(url);
};

export const topRated = async () : Promise<AxiosResponse>=> {
    const url =  `${API_URLS.topRated}?api_key=${TMDB_API_KEY}`;
    return await instance.get(url);
};


