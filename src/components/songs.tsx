import { useState, useEffect } from 'preact/hooks';
import classNames from 'classnames';

import './songs.css';

/** If people want to email us they can click this button and their dreams will come true. */
export const Songs = ({
  ...props
}) => {

  const songs = [
    {
      title: 'All things must pass',
      url: 'https://youtu.be/oVx_8mj-UyE'
    },
    {
      title: 'The rhythm changes', 
      url: 'https://youtu.be/OkLz4MyDmuE'
    },
    {
      title: 'In the middle of something', 
      url: 'https://youtu.be/cdDPR8GzXy8'
    },
    {
      title: 'Colour in my life', 
      url: 'https://youtu.be/xoQIW1tQJQg'
    },
    {
      title: 'Breeze it, buzz it, easy does it', 
      url: 'https://youtu.be/wugWGhItaQA'
    },
    {
      title: "You can't steal my joy",
      url: 'https://www.youtube.com/watch?v=C7w42A8h16c'
    },
    {
      title: "We're caught in a trap",
      url: 'https://www.youtube.com/watch?v=T1g5tVGZhfk'
    },
    {
      title: 'Oh your hair is beautiful',
      url: 'https://www.youtube.com/watch?v=O_WLw_0DFQQ'
    }
  ];

  // declare the function 
  const shuffle = (array: { title: string; url: string; }[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array;
  }; 

  const [shuffledSongs, setShuffledSongs] = useState(songs);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setShuffledSongs(shuffle([...songs]));
  }, []);

  const handleNewSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledSongs.length);
    // add a clicked class
    const songWidget = document.querySelector('.songs-for-fun');
    const songButton = document.querySelector('#song-button');
    if (songWidget) {      
      songWidget.classList.add('clicked');
      songButton.classList.toggle('clicked');
      setTimeout(() => {
        songWidget.classList.remove('clicked');
      }, 200);
    };
  };

  const currentSong = shuffledSongs[currentIndex];

  return (
    <>
      <div className={classNames("songs-for-fun")} >
        <a href={currentSong.url} class="u-font-body u-fontsize-0 u-pad-b-3xs u-pad-i-xs" target="_blank">{currentSong.title} 🡕</a>
        <button id="song-button" class="u-pad-i-xs" onClick={handleNewSong} aria-label="Get another song">
          <svg class="" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="test1" d="M0 15.9268C6.80488 15.9268 7.95195 14.1933 9.48359 10.3951C11.3981 5.64742 12.7317 4.5967 20.1951 4.5967M20.1951 4.5967L15.6737 8.11545M20.1951 4.5967L15.6737 0.999929" stroke="white" stroke-width="2"/>
            <path id="test2" d="M0 3.63428C5.70732 3.63428 7.95195 5.36771 9.48359 9.16589C11.3981 13.9136 12.7317 15.8424 20.1951 15.8424M20.1951 15.8424L15.6737 12.3236M20.1951 15.8424L15.6737 19.0001" stroke="white" stroke-width="2"/>
          </svg>
        </button>
      </div>    
    </>
  );
};