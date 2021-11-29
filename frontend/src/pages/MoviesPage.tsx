import React, {FC} from 'react';
import {useInfiniteQuery} from "react-query";
import axios from "axios";
import {Feeds} from "../model/feed";
import {TMDB_IMG_URL} from "../client/constants";
import {Content, Image, Page} from "../styles";
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';

const fetchPage = async (pageParam = 1) => {
  return await axios.get<any>(Feeds.actionMovies.url, {params: {page: pageParam}});
};

const MoviesPage: FC = () => {
  const {
    data: movies,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError
  } = useInfiniteQuery('movies2',
    ({pageParam = 1}) => fetchPage(pageParam), {
      getNextPageParam: (lastPage, allPages) => {
        const currentPage = lastPage?.data.page;
        const totalPages = lastPage?.data.total_pages;
        return (currentPage < totalPages) ? currentPage + 1 : false;
      }
    });


  // @ts-ignore
  return (
    <Page>
      <Content id={"content"}>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>There was an error</p>
        ) : (
          <InfiniteScroll pageStart={0} loadMore={fetchNextPage} hasMore={hasNextPage}>
          {movies?.pages.map((page) =>
            page?.data.results.map((item: any) => (
              <Image key={item.id} src={`${TMDB_IMG_URL}${item.poster_path}`} alt={item.title} isLarge={true}/>
            ))
          )}
          </InfiniteScroll>
        )}
      </Content>
    </Page>
  );
};

export default MoviesPage;
