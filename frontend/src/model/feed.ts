
import {content, Genre, Network} from "../client/constants";


export interface Feed {
    url: string
    title: string;
    isLarge: boolean;
    name: string;
}

interface FeedMap {
    [key: string]: Feed;
}

export const Feeds: FeedMap = {
    netflix: {
        url: content.byNetwork(Network.NETFLIX),
        title: "Netflix Originals",
        isLarge: true,
        name: "netflix"
    },
    topRated: {
        url: content.topRated(),
        title: "Top Rated",
        isLarge: false,
        name: "top_rated"
    },
    actionMovies: {
        url: content.byGenre(Genre.ActionMovies),
        title: "Action Movies",
        isLarge: false,
        name: "action_movies"
    },
    comedyMovies: {
        url: content.byGenre(Genre.Comedy),
        title: "Comedy Movies",
        isLarge: false,
        name: "comedy_movies"
    },
    horrorMovies: {
        url: content.byGenre(Genre.Horror),
        title: "Horror Movies",
        isLarge: false,
        name: "horror_movies"
    },
    romanceMovies: {
        url: content.byGenre(Genre.Romance),
        title: "Romantic Movies",
        isLarge: false,
        name: "romance_movies"
    },
    documentaries: {
        url: content.byGenre(Genre.Documentary),
        title: "Documentary",
        isLarge: false,
        name: "documentary"
    }
};
