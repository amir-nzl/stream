import React, {FC} from 'react';
import {Feeds} from "../model/feed";
import {Carousel} from "../components/Carousel";
import {Banner} from "../components/Banner";

const LandingPage: FC = () => (
  <div className="App" style={{backgroundColor : '#111'}}>
    <Banner feed={Feeds.topRated}></Banner>
    <Carousel feed={Feeds.netflix}></Carousel>
    <Carousel feed={Feeds.topRated}></Carousel>
    <Carousel feed={Feeds.actionMovies}></Carousel>
    <Carousel feed={Feeds.comedyMovies}></Carousel>
    <Carousel feed={Feeds.horrorMovies}></Carousel>
    <Carousel feed={Feeds.romanceMovies}></Carousel>
    <Carousel feed={Feeds.documentaries}></Carousel>
  </div>
);

export default LandingPage;
