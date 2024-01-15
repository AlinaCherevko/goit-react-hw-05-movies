import React, { useEffect, useState } from 'react';
import { getDataAboutReviews } from 'servises/api';
import css from './Reviews.module.css';

export const Reviews = ({ id }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (!id) return;
    const getReviewById = async () => {
      const { data } = await getDataAboutReviews(id);

      const { results } = data;
      // console.log(results);
      setResults(results);
    };

    getReviewById();
  }, [id]);

  return (
    <div>
      {results.length !== 0 ? (
        <ul className={css.reviewList}>
          {Array.isArray(results) &&
            results.map(review => (
              <li key={review.id}>
                <p className={css.reviewTitle}>{review.author}</p>
                <p className={css.review}>{review.content}</p>
              </li>
            ))}
        </ul>
      ) : (
        <p className={css.reviewTitle}>
          We dont have any reviews for this movie
        </p>
      )}
    </div>
  );
};
// to={`/movies/${result.id}`}
