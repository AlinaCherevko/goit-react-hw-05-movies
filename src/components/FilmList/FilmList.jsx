import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ results }) => {
  const location = useLocation();
  return (
    <ul>
      {Array.isArray(results) &&
        results.map(result => (
          <li key={result.id}>
            <Link state={{ from: location }} to={`/movies/${result.id}`}>
              <p>{result.title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};
