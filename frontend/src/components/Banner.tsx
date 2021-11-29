import {FC, useEffect, useState} from "react";
import {Feed} from "../model/feed";
import {TMDB_IMG_URL} from "../client/constants";
import {Button, Content, Description, Fade, Header, Title} from "./Banner.styled";
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "axios";

const movieTrailer = require('movie-trailer');

export const Banner: FC<{ feed: Feed }> = ({feed}) => {
  let navigate = useNavigate();
  const [playButtonLabel, setPlayButtonLabel] = useState<string>('Play');
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [content, setContent] = useState<any | null>(null);

  const handlePlayButtonClick = async (movie: any) => {
    if (trailerUrl) {
      setTrailerUrl(null);
      setPlayButtonLabel('Play');
    } else {
      await movieTrailer(null, {id: true, tmdbId: movie.id})
        .then((id: any) => {
          setTrailerUrl(id);
          setPlayButtonLabel('Back');
        })
        .catch((error: any) => {
          console.log(error);
          setPlayButtonLabel('Play');
        });
    }
  };

  const {data, isSuccess} = useQuery(feed.name, () => axios.get<any>(feed.url));
  useEffect(() => {
    let randomItem = data?.data.results[Math.floor(Math.random() * data.data.results.length)];
    setContent(randomItem);
  }, [feed,data]);


  return (
    <>
      {isSuccess &&
      <Header style={{backgroundImage: `url(${TMDB_IMG_URL}/${content?.backdrop_path})`,}}>

        <Content>
          <Title>{content?.title || content?.name || content?.original_name}</Title>
          <Button onClick={() => handlePlayButtonClick(content)}>{playButtonLabel}</Button>
          <Button onClick={() => navigate('/movies')}>My List</Button>
          <Description>{content?.overview}</Description>
          {/*{trailerUrl &&*/}
          {/*<Video>*/}
          {/*  <YouTube videoId={trailerUrl} opts={opts}/>*/}
          {/*</Video>}*/}
        </Content>
        <Fade/>
      </Header>
      }
    </>
  )
    ;
};
