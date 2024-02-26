import React from 'react';
import { Genres } from 'components/Genres/Genres';
import { ModalTrailer } from 'components/ModalTrailer/ModalTrailer';
import css from './FilmDetails.module.css';

export const FilmDetails = ({ results }) => {
  const path = 'https://image.tmdb.org/t/p/original';
  const rating = Math.floor(results.vote_average * 10);

  //   console.log(results.genres);
  return (
    <>
      <div className={css.detailsWrapper}>
        <img
          className={css.detailsImage}
          src={path + results.poster_path}
          alt={results.title}
        />
        <div className={css.detailsWrapperText}>
          <p className={css.detailsAfterTitle}>
            Release Date{' '}
            <span className={css.detailsDescription}>
              {results.release_date}
            </span>
          </p>

          <p className={css.detailsAfterTitle}>
            User rating:
            <span className={css.detailsDescription}> {rating}%</span>
          </p>

          <p className={css.detailsAfterTitle}>Genres</p>
          <Genres genresArray={results.genres} />
          {results.tagline && (
            <>
              <p className={css.detailsAfterTitle}>Tagline</p>
              <span className={css.detailsDescription}>{results.tagline}</span>
            </>
          )}
          <p className={css.detailsAfterTitle}>Overview</p>
          <span className={css.detailsDescriptionOverview}>
            {results.overview}
          </span>
        </div>
      </div>

      <ModalTrailer id={results.id} />
    </>
  );
};
