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
      title: 'Your hair is beautiful',
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
    if (songWidget) {
      songWidget.classList.add('clicked');
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
        <button class="u-pad-i-xs" onClick={handleNewSong} aria-label="Get another song">
          <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4777 4.87103L7.50017 8.84851V5.87468C5.99802 5.87468 4.58535 6.46003 3.5227 7.52268C2.46005 8.58533 1.87536 9.99733 1.8747 11.5002C1.8747 13.0023 2.46005 14.415 3.5227 15.4776C4.58535 16.5403 5.99735 17.125 7.50018 17.1256C9.00234 17.1256 10.415 16.5403 11.4777 15.4776C12.5403 14.415 13.125 13.003 13.1257 11.5002C13.1257 11.3742 13.121 11.2502 13.1131 11.1256L14.9838 11.001C15.1217 13.0825 14.3951 15.2118 12.8041 16.8028C9.87539 19.7315 5.12629 19.7315 2.19754 16.8028C-0.73121 13.874 -0.73121 9.12494 2.19754 6.19619C3.66191 4.73182 5.58171 3.99996 7.50084 4.00063L7.50017 0.893555L11.4777 4.87103Z" fill="white"/>
          </svg>
        </button>
      </div>    
    </>
  );
};