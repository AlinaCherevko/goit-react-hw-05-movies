import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from './FilmList.module.css';

export const FilmList = ({ results }) => {
  const location = useLocation();
  const path = 'https://image.tmdb.org/t/p/original';
  return (
    <ul className={css.filmList}>
      {results.map(result => (
        <li className={css.filmItem} key={result.id}>
          <Link
            className={css.filmLink}
            state={{ from: location }}
            to={`/movies/${result.id}`}
          >
            <div className={css.textWrap}>
              <img
                className={css.detailsImage}
                src={path + result.poster_path}
                alt={result.title}
              />
              <div className={css.hiddenText}>
                <span class={css.buttonYoutube}>YouTube</span>
              </div>
            </div>
            <p className={css.filmTitle}>{result.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
