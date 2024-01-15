import React from 'react';
import css from './Form.module.css';

export const Form = ({ onSearchBtnClick }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.text;

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
