import { useState } from 'preact/hooks';
import classNames from 'classnames';

import './songs.css';

/** If people want to email us they can click this button and their dreams will come true. */
export const Songs = ({
  ...props
}) => {

  const songs = [
    {
      title: 'Song 0',
      url: 'https://www.youtube.com/watch?v=1'
    },
    {
      title: 'Song 1', 
      url: 'https://www.youtube.com/watch?v=1'
    }
  ]

  const [song, setSong] = useState(songs[0]);
  
  function handleNewSong() {
    setSong(songs[1]);
  };

  return (
    <>
      <div className={classNames("songs-for-fun")} >
        <a href={song['url']} class="u-font-body u-fontsize-0 u-pad-b-3xs u-pad-i-xs" target="_blank">{song['title']} 🡕</a>
        <button class="u-pad-i-xs" onClick={handleNewSong}>↻</button>
      </div>    
    </>
  );
};