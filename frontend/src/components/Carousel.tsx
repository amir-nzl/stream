import {FC, Key, useState} from "react";
import {Feed} from "../model/feed";
import {TMDB_IMG_URL} from "../client/constants";
import { Item, Items, Title, Video, Wrapper} from "./Carousel.styled";
import YouTube, {Options} from "react-youtube";
import {useQuery} from "react-query";
import axios from "axios";
import {Image} from "../styles";
const movieTrailer = require('movie-trailer');


export const Carousel: FC<{ feed: Feed }> = ({feed}) => {

  const { data, isSuccess} = useQuery(feed.name, () => axios.get<any>(feed.url), { staleTime: 10000 });
  // NOTE: component state is analogous of short-term memory
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

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

  return (
    <Wrapper>
      {isSuccess &&
      <>
        <Title>{feed.title} </Title>
        <Items>
          {data?.data.results.map((item: { id: Key | null | undefined; poster_path: any; backdrop_path: any; name: string | undefined; }, index: any) =>
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
        </Video>
        }
      </>}
    </Wrapper>
  );
};
