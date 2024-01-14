import React, { useEffect, useState } from 'react';

import { getDataAboutCast } from 'servises/api';
import css from './Cast.module.css';

export const Cast = ({ id }) => {
  const path = 'https://image.tmdb.org/t/p/original';
  const [cast, setCast] = useState([]);
  useEffect(() => {
    if (!id) return;
    const getCastById = async () => {
      const { data } = await getDataAboutCast(id);
      // console.log(data);
      const { cast } = data;
      // console.log(cast);
      setCast(cast);
    };

    getCastById();
  }, [id]);

  return (
    <div>
      <ul className={css.personList}>
        {Array.isArray(cast) &&
          cast.map(person => (
            <li className={css.personItem} key={person.id}>
              <img
                className={css.personImg}
                src={path + person.profile_path}
                alt={person.name}
              />
              <div className={css.personWrap}>
                <p className={css.personName}>{person.name}</p>
                <p className={css.person}>{person.character}</p>
              </div>
            </li>
          ))}
      </ul>{' '}
    </div>
  );
};
