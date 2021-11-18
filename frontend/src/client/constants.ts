export const TMDB_API_KEY = 'f700ba73f8b4382943135784a35a36d9';
export const TMDB_IMG_URL = 'https://image.tmdb.org/t/p/original';
export const TMDB_API_URL = 'https://api.themoviedb.org/3'

export enum Network {
    NETFLIX = 213
}

export enum Filter {
    Trending = 'Trending',
    TopRated = 'Top Rated'
}

export enum Genre {
    ActionMovies = 28,
    ActionTV = 10759,
    Adventure = 12,
    Animation = 16,
    Comedy = 35,
    Crime = 80,
    Documentary = 99,
    Drama = 18,
    Family = 10751,
    Kids = 10762,
    Fantasy = 14,
    History = 36,
    Horror = 27,
    Music = 10402,
    Mystery = 9648,
    News = 10763,
    Romance = 10749,
    Reality = 10764,
    SciFi = 878,
    Soap = 10766,
    Talk = 10767,
    TVMovie = 10770,
    Thriller = 53,
    War = 10752,
    Western = 37
};

export enum API_URLS {
    trending = '/trending/all/week',
    tvShows = '/discover/tv',
    movies = '/discover/movie',
    topRated = '/movie/top_rated'
};



