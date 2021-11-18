import {FC, useEffect, useState} from "react";
import {Feed} from "../model/feed";
import {TMDB_IMG_URL} from "../client/constants";
import {Button, Content, Description, Fade, Header, Title} from "./Banner.styled";


export const Banner: FC<{ feed: Feed }> = ({feed}) => {
    const [content, setContent] = useState<any>();
    useEffect(() => {
        const fetchData = async () => {
            const request = await feed.getContent;
            const randomItem = request.data.results[Math.floor(Math.random() * request.data.results.length)];
            setContent(randomItem);

        };
        fetchData();
    }, [feed]);

    return (
        <Header style={{backgroundImage: `url(${TMDB_IMG_URL}/${content?.backdrop_path})`,}}>
            <Content>
                <Title>{content?.title || content?.name || content?.original_name}</Title>
                <Button>Play</Button>
                <Button>My List</Button>
                <Description>{content?.overview}</Description>
            </Content>
            <Fade/>
        </Header>
    );
};