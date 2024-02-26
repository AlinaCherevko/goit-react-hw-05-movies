import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { getTrailerById } from 'servises/api.js';

import css from './ModalTrailer.module.css';

export const ModalTrailer = ({ id }) => {
  const [trailerKey, setTrailerKey] = useState('');

  console.log(id);
  useEffect(() => {
    const getTrailer = async () => {
      try {
        const { key } = await getTrailerById(id);
        setTrailerKey(key);
        console.log(key);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrailer();
  }, [id]);

  //   const onPlayerReady = () => {};
  //   const opts = {
  //     height: '390',
  //     width: '640',
  //     playerVars: {
  //       // https://developers.google.com/youtube/player_parameters
  //       autoplay: 1,
  //     },
  //   };

  return (
    <div className={css.wrap}>
      {trailerKey ? <YouTube videoId={trailerKey} /> : <p> </p>}
    </div>
  );
};
