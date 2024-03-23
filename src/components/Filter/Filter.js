import React from 'react';
import Select from 'react-select';
import { genres } from '../../servises/genres.js';
import css from './Filter.module.css';

const Filter = ({ handleSelect }) => {
  const options = genres.map(genre => ({
    value: genre.id,
    label: genre.name,
  }));

  const handleChange = selectedOption => {
    handleSelect(selectedOption ? selectedOption.value : null);
  };

  return (
    <div>
      <Select
        className={css.selector}
        options={options}
        onChange={handleChange}
        placeholder="Select a genre"
      />
    </div>
  );
};

export default Filter;
