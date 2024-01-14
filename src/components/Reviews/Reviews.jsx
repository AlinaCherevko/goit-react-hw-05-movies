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
      {/* <Link to={`/movies/${id}/reviews`}>
        <p>Reviews</p>
      </Link> */}
      <ul className={css.reviewList}>
        {Array.isArray(results) &&
          results.map(review => (
            <li key={review.id}>
              <p className={css.reviewTitle}>{review.author}</p>
              <p className={css.review}>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
// to={`/movies/${result.id}`}
