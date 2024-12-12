import React from 'react';
import classNames from 'classnames';

import './Testimonial.css';

import {SmileyProfile, SmileyProfileProps} from '../smiley-profile/SmileyProfile';

export interface TestimonialProps {
  /** Which colour for the title? */
  colour: 'orange' | 'pink' | 'purple' | 'green';  
  /** Testimonial title */
  title?: string;
  /** Testimonial body quote */
  body: string;
  /** SmileyProfile props */
  smileyProfileProps: SmileyProfileProps; // Use the imported type
}

/** A panel to shine a spotlight on something important */
export const Testimonial = ({
  colour = 'orange',
  title,
  body,
  smileyProfileProps,
  ...props
}: TestimonialProps) => {
  return (
    <figure className={classNames("testimonial")} >      
      <blockquote className={classNames("testimonial__quote", "u-mrg-be-m")}>
        {title && (
          <h3 className={classNames("quote-title", "u-font-display", "u-fontsize-2", "u-mrg-be-xs", colour)}>"{title}"</h3>
        )}        
        <p className={classNames("quote-body", "u-fontsize-0")}>{body}</p>
      </blockquote>
      <figcaption>
        <SmileyProfile {...smileyProfileProps} /> {/* Pass the props object */}
      </figcaption>
    </figure>
  );
};