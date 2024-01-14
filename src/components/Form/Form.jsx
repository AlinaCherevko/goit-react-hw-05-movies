import React from 'react';
import css from './Form.module.css';
import { useSearchParams } from 'react-router-dom';

export const Form = ({ onSearchBtnClick, setSearchParams }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.text;
    setSearchParams({ value });
    onSearchBtnClick(value);
    e.target.reset();
  };

  return (
    <div className={css.formWrap}>
      <form className={css.form} action="" onSubmit={onFormSubmit}>
        <input
          placeholder="Search movie..."
          className={css.formInput}
          type="text"
          name="text"
        />
        <button className={css.formBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
