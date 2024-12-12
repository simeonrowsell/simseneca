import React, {useState, useRef} from 'react';
import classNames from 'classnames';

import './MainNav.css';

import {Logo} from '../logo/Logo';
import {CopyEmail} from '../copy-email/CopyEmail';

import { gsap } from "gsap";

/** The main navigation, up the top there */
export const MainNav = ({
  onScrollToSpotlight,
  onScrollToProcess
}) => {

  // State for controlling mobile navigation visibility
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  // Function to toggle the mobile navigation
  const toggleMobileNav = () => {
    if (!isMobileNavVisible) {
      // Open the mobile nav
      gsap.set(".mobile-nav", { display: "flex" }); // Ensure it's visible before animating
      gsap.to(".mobile-nav", { autoAlpha: 1, duration: 0.3 });
      gsap.fromTo(
        ".mobile-nav",
        { 
          opacity: 0 
        },
        { 
          opacity: 1,
          duration: 0.3 
        }
      );
    } else {
      // Close the mobile nav
      gsap.to(".mobile-nav", { opacity: 0, stagger: -0.1, duration: 0.3 });
      gsap.to(".mobile-nav", {
        autoAlpha: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(".mobile-nav", { display: "none" }); // Hide after animation
        },
      });
    }

    setMobileNavVisible(!isMobileNavVisible);
  };
  
  return (
    <header className={classNames("main-nav-wrappper")}>
      <section className={classNames("main-nav")}>
        <a href="/">
          <Logo brightness='dark' animation/>
        </a>
        <nav className={classNames("main-nav__navigation")}>
          <ul role="menu">
            <li className={classNames("u-font-display", "u-fontsize-1")} role="presentation">
              <a
                role="menuitem" 
                onClick={onScrollToSpotlight}
              >
                What we do
              </a>
              <noscript>
                <a href="#what-we-do">What we do</a>
              </noscript>
            </li>
            <li className={classNames("u-font-display", "u-fontsize-1")} role="presentation">
              <a                 
                role="menuitem"
                onClick={onScrollToProcess}
              >
                How we do it
              </a>
              <noscript>
                <a href="#how-we-do-it">How we do it</a>
              </noscript>
            </li>
            <li className={classNames("main-nav__hamburger")} >
              <button
                aria-label="Toggle mobile navigation"
                className="hamburger-button"
                onClick={toggleMobileNav}
              >
                <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H24" stroke="black" stroke-width="2" stroke-linecap="round"/>
                  <path d="M1 9H24" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </li>
          </ul>          
        </nav>
        <CopyEmail size='small' />        
      </section>

      <nav 
        id="mobile-nav" 
        className={classNames("mobile-nav", { "mobile-nav__visible": isMobileNavVisible })}
        role="navigation"
      >
        <div className="mobile-nav__header">
          <a href="/">
            <Logo brightness='light' colour='green'/>
          </a>
          <button
            aria-label="Close mobile navigation"
            className="close-button"
            onClick={toggleMobileNav}
          >
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.36816 18L17.6316 1.73651" stroke="black" stroke-width="2" stroke-linecap="round"/>
              <path d="M1.36816 1.99994L17.6316 18.2634" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <ul role="menu">
          <li className={classNames("u-font-display", "u-fontsize-5", "u-mrg-be-2xs")} role="presentation">
            <a 
              href="#what-we-do" 
              role="menuitem"
              onClick={toggleMobileNav}
            >
              What we do
            </a>
          </li>
          <li className={classNames("u-font-display", "u-fontsize-5")} role="presentation">
            <a 
              href="#how-we-do-it" 
              role="menuitem"
              onClick={toggleMobileNav}
            >
              How we do it
            </a>
          </li>          
        </ul>
        <CopyEmail size='small' />
      </nav>

    </header>
  );
};