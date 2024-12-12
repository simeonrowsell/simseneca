import React from 'react';
import classNames from 'classnames';

import './Footer.css';

import {Logo} from '../logo/Logo';
import {CopyEmail} from '../copy-email/CopyEmail';

export interface FooterProps {
}

/** It's the footer, you know the drill */
export const Footer = ({
  ...props
}: FooterProps) => {

  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classNames("site-footer-wrapper")}>
      <section className={classNames("footer-contact", "u-pad-m", "u-pad-bs-3xl")}>
        <div className={classNames("footer-contact__blurb")}>
          <p className={classNames("u-subtitle", "u-pad-be-2xs")}>Reckon we can help?</p>
          <p>Give us a shout and let's make something great together</p>
        </div>
        <div className={classNames("footer-contact__email")}>
          <CopyEmail size='large' />
        </div>        
      </section>
      <section className={classNames("footer-sign-off", "u-pad-m", "u-pad-bs-4xl")}>
        <div className={classNames("footer-sign-off__top", "u-pad-be-s", "u-mrg-be-s")}>
          <div className={classNames("footer-sign-off__brand")}>
            <Logo colour='dark'/>
            <p>A digital product studio in Bristol</p>
          </div>
          <nav className={classNames("footer-sign-off__nav")}>
            <ul role="menu">
              <li className={classNames("u-font-display", "u-fontsize-1")} role="presentation">
                <a href="#what-we-do" role="menuitem">What we do</a>
              </li>
              <li className={classNames("u-font-display", "u-fontsize-1")} role="presentation">
                <a href="#how-we-do-it" role="menuitem">How we do it</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className={classNames("footer-sign-off__legals", "u-fontsize--1")}>
          Made with ✌️  |  Copyright © Luminous {currentYear}
        </p>
      </section>      
    </footer>
  );
};