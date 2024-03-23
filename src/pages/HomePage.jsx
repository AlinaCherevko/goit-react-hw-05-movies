import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
import { getData } from 'servises/api';
import { FilmList } from 'components/FilmList/FilmList';
import css from './HomePage.module.css';
import Filter from 'components/Filter/Filter';

const HomePage = () => {
  // console.log(location);
  const [results, setResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [page, setPage] = useState(1);
  const [isVisibleLoadMoreBtn, setIsVisibleLoadMoreBtn] = useState(false);

  const handleSelect = value => {
    setSelectedValue(value);

    console.log(selectedValue);
  };
  const filteredResults = selectedValue
    ? results.filter(({ genre_ids }) =>
        genre_ids.includes(Number(selectedValue))
      )
    : results;

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

    getResults();
  }, [page]);
  return (
    <div className={css.wrap}>
      <Filter handleSelect={handleSelect} />
      <h1 className={css.title}>Trending today</h1>
      {filteredResults.length === 0 ? (
        <p>Not found movies with this genre</p>
      ) : (
        <FilmList results={filteredResults} />
      )}
      {isVisibleLoadMoreBtn && (
        <button className={css.loadMore} onClick={onLoadMoreClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default HomePage;
