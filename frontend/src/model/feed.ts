import {fetchMovies, fetchTvShows, topRated} from "../client/tmdb";
import {Genre, Network} from "../client/constants";
import {AxiosResponse} from "axios";


export interface Feed {
    getContent: Promise<AxiosResponse>;
    title: string;
    isLarge: boolean
}

interface FeedMap {
    [key: string]: Feed;
}

export const Feeds: FeedMap = {
    netflix: {
        getContent: fetchTvShows(Network.NETFLIX),
        title: "Netflix Originals",
        isLarge: true
    },
    topRated: {
        getContent: topRated(),
        title: "Top Rated",
        isLarge: false
    },
    actionMovies: {
        getContent: fetchMovies(Genre.ActionMovies),
        title: "Action Movies",
        isLarge: false
    },
    comedyMovies: {
        getContent: fetchMovies(Genre.Comedy),
        title: "Comedy Movies",
        isLarge: false
    },
    horrorMovies: {
        getContent: fetchMovies(Genre.Horror),
        title: "Horror Movies",
        isLarge: false
    },
    romanceMovies: {
        getContent: fetchMovies(Genre.Romance),
        title: "Romantic Movies",
        isLarge: false
    },
    documentaries: {
        getContent: fetchMovies(Genre.Documentary),
        title: "Documentary",
        isLarge: false
    }
};