import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { FilmDetails } from 'components/FilmDetails/FilmDetails';
import { Loader } from 'components/Loader/Loader';

import { getDataById } from 'servises/api';
import css from './MoviePageDetails.module.css';

const MoviePageDetails = () => {
  //   const params = useParams();
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  const backLinkRef = useRef(location.state?.from ?? '/');
  const [results, setResults] = useState('');

  useEffect(() => {
    if (results) return;

    const getResultsById = async () => {
      try {
        const { data } = await getDataById(movieId);

        setResults(data);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getResultsById();
  }, [movieId, results]);
  return (
    <>
      <Link className={css.goBackLink} to={backLinkRef.current}>
        Go Back
      </Link>
      <FilmDetails results={results} />
      <div className={css.infoWrap}>
        <p className={css.infoTitle}>Additional information</p>
        <div className={css.infoWrapLinks}>
          <Link to="cast">
            <p className={css.link}>Cast</p>
          </Link>
          <Link to="reviews">
            <p className={css.link}>Reviews</p>
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast id={results.id} />} />
          <Route path="reviews" element={<Reviews id={results.id} />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MoviePageDetails;
