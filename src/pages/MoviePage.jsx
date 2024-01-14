import React, { useEffect, useState } from 'react';
import { Form } from '../components/Form/Form';
import { FilmList } from 'components/FilmList/FilmList';
import { getDataByQuery } from 'servises/api';

const MoviePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [resultsByQuery, setResultsByQuery] = useState([]);

  const onSearchBtnClick = value => {
    setSearchValue(value);
    setResultsByQuery([]);
  };
  useEffect(() => {
    if (searchValue === '') return;
    const getResultsByQuery = async () => {
      try {
        const { results } = await getDataByQuery(searchValue);
        setResultsByQuery(results);
        // console.log(results);
      } catch (error) {}
    };

    getResultsByQuery();
  }, [searchValue]);
  return (
    <div>
      <Form onSearchBtnClick={onSearchBtnClick} />
      {resultsByQuery.length > 0 && <FilmList results={resultsByQuery} />}
    </div>
  );
};

export default MoviePage;
