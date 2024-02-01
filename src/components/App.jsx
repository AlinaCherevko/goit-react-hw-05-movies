import React from 'react';
import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const MoviePageDetails = lazy(() => import('pages/MoviePageDetails'));

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.siteHeader}>
        <NavLink className={css.headerNavigation} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerNavigation} to="/movies">
          Movies
        </NavLink>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="movies/:movieId/*" element={<MoviePageDetails />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
