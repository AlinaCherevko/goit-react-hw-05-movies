import React from 'react';
import { genres } from '../../servises/genres.js';
import css from './Filter.module.css';

const Filter = ({ handleSelect }) => {
  const onSelectClick = e => {
    const { value } = e.currentTarget;
    console.log(value);
    handleSelect(value);
  };
  return (
    <div>
      <select className={css.selector} onChange={onSelectClick}>
        <option> Select a genre</option>

        {genres.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
