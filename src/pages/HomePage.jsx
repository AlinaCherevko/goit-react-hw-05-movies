import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
import { getData } from 'servises/api';
import { FilmList } from 'components/FilmList/FilmList';
import css from './HomePage.module.css';
import Filter from 'components/Filter/Filter';

const HomePage = () => {
  // console.log(location);
  const [results, setResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [page, setPage] = useState(1);
  const [isVisibleLoadMoreBtn, setIsVisibleLoadMoreBtn] = useState(false);

  const handleSelect = value => {
    setResults([]);
    setSelectedValue(value);

    console.log(selectedValue);

    const filteredResults = results.filter(({ genre_ids }) =>
      genre_ids.includes(Number(value))
    );

    console.log(filteredResults);
    setResults(filteredResults);
    console.log(results);
  };

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
