import React from 'react';
import css from './Genres.module.css';

export const Genres = ({ genresArray }) => {
  console.log(genresArray);
  return (
    <ul className={css.genresList}>
      {Array.isArray(genresArray) &&
        genresArray.slice(0, 2).map(genre => (
          <li className={css.description} key={genre.id}>
            {genre.name}
          </li>
        ))}
    </ul>
  );
};
