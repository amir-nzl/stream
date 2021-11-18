import React from 'react';
import {Carousel} from "./components/Carousel";
import {Feeds} from "./model/feed";
import './App.css'
import {Banner} from "./components/Banner";
import {Nav} from "./components/Nav";

function App() {
    return (
        <div className="App">

            <Nav/>
            <Banner feed= {Feeds.netflix} ></Banner>
            <Carousel feed= {Feeds.netflix} ></Carousel>
            <Carousel feed= {Feeds.topRated} ></Carousel>
            <Carousel feed= {Feeds.actionMovies} ></Carousel>
            <Carousel feed= {Feeds.comedyMovies} ></Carousel>
            <Carousel feed= {Feeds.horrorMovies} ></Carousel>
            <Carousel feed= {Feeds.romanceMovies} ></Carousel>
            <Carousel feed= {Feeds.documentaries} ></Carousel>
        </div>
    );
}

export default App;
