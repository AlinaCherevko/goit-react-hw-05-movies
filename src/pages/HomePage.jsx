import React, { useEffect, useState } from 'react';
import { getData } from 'servises/api';
import { FilmList } from 'components/FilmList/FilmList';

import css from './HomePage.module.css';

const HomePage = () => {
  // console.log(location);
  const [results, setResults] = useState('');

  useEffect(() => {
    if (results) return;

    const getResults = async () => {
      try {
        const { results } = await getData();
        setResults(results);
      } catch (error) {}
    };
    getResults();
  }, [results]);
  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {results.length > 0 && <FilmList results={results} />}
    </div>
  );
};

export default HomePage;
