import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Form } from '../components/Form/Form';
import { FilmList } from 'components/FilmList/FilmList';
import { getDataByQuery } from 'servises/api';

const MoviePage = () => {
  const [resultsByQuery, setResultsByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const onSearchBtnClick = value => {
    setSearchParams({ query: value });
    setResultsByQuery([]);
  };
  useEffect(() => {
    if (query === '' || query === null) return;
    const getResultsByQuery = async () => {
      try {
        const { results } = await getDataByQuery(query);
        setResultsByQuery(results);
        console.log(results);

        if (results.length === 0) alert('no movies');
      } catch (error) {}
    };

    getResultsByQuery();
  }, [query]);
  return (
    <div>
      <Form onSearchBtnClick={onSearchBtnClick} />
      {resultsByQuery.length > 0 && <FilmList results={resultsByQuery} />}
    </div>
  );
};

export default MoviePage;
