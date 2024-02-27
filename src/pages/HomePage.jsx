import React, { useEffect, useState } from 'react';
import { getData } from 'servises/api';
import { FilmList } from 'components/FilmList/FilmList';

import css from './HomePage.module.css';

const HomePage = () => {
  // console.log(location);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisibleLoadMoreBtn, setIsVisibleLoadMoreBtn] = useState(false);
  // const isFirstRender = useRef(true);

  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    const getResults = async () => {
      try {
        const { results, total_pages } = await getData(page);

        setResults(prevState => [...prevState, ...results]);
        setIsVisibleLoadMoreBtn(page < total_pages);
      } catch (error) {}
    };

    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    getResults();
  }, [page]);
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Trending today</h1>
      {results.length > 0 && <FilmList results={results} />}
      {isVisibleLoadMoreBtn && (
        <button className={css.loadMore} onClick={onLoadMoreClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default HomePage;
