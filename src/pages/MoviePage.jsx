import React, { useEffect, useState } from 'react';
import { Form } from '../components/Form/Form';
import { FilmList } from 'components/FilmList/FilmList';
import { getDataByQuery } from 'servises/api';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [resultsByQuery, setResultsByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchBtnClick = value => {
    setResultsByQuery([]);
  };
  useEffect(() => {
    const query = searchParams.get('query');
    if (query === '') return;
    const getResultsByQuery = async () => {
      try {
        const { results } = await getDataByQuery(query);
        setResultsByQuery(results);
        // console.log(results);
      } catch (error) {}
    };

    getResultsByQuery();
  }, [searchParams]);
  return (
    <div>
      <Form
        onSearchBtnClick={onSearchBtnClick}
        setSearchParams={setSearchParams}
      />
      {resultsByQuery.length > 0 && <FilmList results={resultsByQuery} />}
    </div>
  );
};

export default MoviePage;
