import {FC, useEffect, useState} from "react";
import {Feed} from "../model/feed";
import {TMDB_IMG_URL} from "../client/constants";
import {Image, Item, Items, Title, Video, Wrapper} from "./Carousel.styled";
import YouTube, { Options } from "react-youtube";

const movieTrailer = require('movie-trailer');


export const Carousel: FC<{ feed: Feed }> = ({feed}) => {
    /**
     * NOTE: component state is analogous of short-term memory
     *
     * **/
    const [content, setContent] = useState<any[]>([]);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    useEffect(() => {
        /** NOTE: Calling an async function inside use effect
         * You will need to create an internal function and
         * call it.
         **/
        const fetchData = async () => {
            const request = await feed.getContent;
            setContent(request.data.results);
        };
        fetchData().then(error => console.log('error fetching data'));
        /**
         * NOTE: Variables inside useEffect
         * Variables inside useEffect which are external to
         * useEffect must be added to the deps [] of useEffect
         **/
    }, [feed]);

    const opts : Options = {
        width: '100%',
        playerVars: {
            origin: window.location.href,
            autoplay: 1,
            modestbranding: 1,
            rel:0,
            showinfo:0
        },
    };

    const handleClick = async (movie: any) => {

        if (videoUrl) {
            setVideoUrl(null);
        } else {
            await movieTrailer(null, {id: true, tmdbId: movie.id})
                .then((id: any) => {
                    setVideoUrl(id);
                })
                .catch((error: any) => console.log(error));
        }
    };


    // @ts-ignore
    return (
        <Wrapper className="feed">
            <Title>{feed.title}</Title>
            <Items>
                {content.map((item, index) =>
                    <Item>
                        <Image
                            key={item.id}
                            src={`${TMDB_IMG_URL}${feed.isLarge ? item.poster_path : item.backdrop_path}`}
                            alt={item.name}
                            isLarge={feed.isLarge}
                            onClick={() => handleClick(item)}/>
                    </Item>
                )}
            </Items>
            {videoUrl &&
            <Video>
                <YouTube videoId={videoUrl} opts={opts}/>
            </Video>}
        </Wrapper>
    );
};