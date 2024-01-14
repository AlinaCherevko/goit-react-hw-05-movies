import React from 'react';
import css from './FilmDetails.module.css';
import { Genres } from 'components/Genres/Genres';

export const FilmDetails = ({ results }) => {
  const path = 'https://image.tmdb.org/t/p/original';
  const rating = Math.floor(results.vote_average * 10);

  //   console.log(results.genres);
  return (
    <>
      {' '}
      <div className={css.detailsWrapper}>
        <img
          className={css.detailsImage}
          src={path + results.poster_path}
          alt=""
        />
        <div className={css.detailsWrapperText}>
          <h2 className={css.detailsTitle}>{results.title}</h2>
          <p className={css.detailsAfterTitle}>
            Release Date{' '}
            <span className={css.detailsDescription}>
              {results.release_date}
            </span>
          </p>

          <span className={css.detailsDescription}>User score: {rating}%</span>
          <p className={css.detailsAfterTitle}>Overview</p>
          <span className={css.detailsDescription}>{results.overview}</span>
          <p className={css.detailsAfterTitle}>Genres</p>
          <Genres genresArray={results.genres} />
          {results.tagline && (
            <div>
              {' '}
              <p className={css.detailsAfterTitle}>Tagline</p>
              <span className={css.detailsDescription}>{results.tagline}</span>
            </div>
          )}
        </div>
      </div>
      <div>
        {/* <Cast id={results.id} />
        <Reviews id={results.id} /> */}
      </div>
    </>
  );
};
