import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './FilmList.module.css';

export const FilmList = ({ results }) => {
  const location = useLocation();
  return (
    <ul className={css.filmList}>
      {Array.isArray(results) &&
        results.map(result => (
          <li className={css.filmItem} key={result.id}>
            <Link
              className={css.filmLink}
              state={{ from: location }}
              to={`/movies/${result.id}`}
            >
              <p className={css.filmTitle}>{result.title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};
