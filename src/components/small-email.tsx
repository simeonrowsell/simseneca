import { useState } from 'preact/hooks';
import classNames from 'classnames';

import './small-email.css';

/** If people want to email us they can click this button and their dreams will come true. */
export const SmallEmail = ({
  label,
  ...props
}: { label?: string }) => {
  // States for copying feedback
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const email = "sim@simseneca.design";
  const emailLabel = label ?? "Email";

  // Handle the copy to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true);
      // Reset after a short delay
      setTimeout(() => setIsCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <div
        className={classNames("small-email")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCopyEmail}
      >
        <button
          className={classNames("small-email__button", "u-pad-xs", "u-font-display", "u-fontsize-0",
            {
              "copied": isCopied, // Add copied class
              "hovered": isHovered // Add hovered class
            }
          )}
          aria-label="Copy email address"
        >
          <span class="orb"></span>
          <address
            className={classNames(  
              {"hovered": isHovered} // Add hovered class
            )}
          >
            <p className={classNames("label", "u-subtitle")}>{emailLabel}</p>
          </address>
        
          {isCopied ? (
            <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.29429 7.30012L2.63773 5.97263C2.63774 5.97262 2.63772 5.97264 2.63773 5.97263C3.55406 5.06715 5.03297 5.06711 5.9493 5.97258C5.94932 5.9726 5.94928 5.97256 5.9493 5.97258L9.12507 9.11055L17.0509 1.27908C17.9672 0.373649 19.4461 0.373649 20.3624 1.27908L21.7059 2.60661C22.6315 3.52126 22.6314 5.01117 21.7059 5.92579L10.7808 16.7209C9.8645 17.6263 8.38562 17.6264 7.46926 16.7209L1.29431 10.6193C0.368643 9.70469 0.368751 8.21475 1.29429 7.30012ZM8.45332 15.725C8.82431 16.0917 9.42581 16.0917 9.79683 15.7251L20.7218 4.92999C21.0928 4.56338 21.0928 3.96903 20.7218 3.60246L19.3784 2.27493C19.0074 1.90836 18.4058 1.90836 18.0349 2.27493L9.12508 11.0787L4.9653 6.96844C4.59431 6.60183 3.99277 6.60183 3.62179 6.96844L2.27832 8.29596C1.90733 8.66257 1.90733 9.25692 2.27832 9.62349L8.45332 15.725Z" fill="#110B25"/>
            </svg>
          ): (
            <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5293 2.30608L12.7922 0.684766C12.4908 0.403461 12.082 0.245424 11.6557 0.245422L5.89286 0.245422C5.00525 0.245422 4.28571 0.916985 4.28571 1.74542V3.24542H1.60714C0.719531 3.24542 0 3.91698 0 4.74542V14.7454C0 15.5739 0.719531 16.2454 1.60714 16.2454H9.10714C9.99475 16.2454 10.7143 15.5739 10.7143 14.7454V13.2454H13.3929C14.2805 13.2454 15 12.5739 15 11.7454V3.36674C15 2.96891 14.8307 2.58738 14.5293 2.30608ZM8.90625 14.7454H1.80804C1.75476 14.7454 1.70366 14.7257 1.66598 14.6905C1.62831 14.6553 1.60714 14.6077 1.60714 14.5579V4.93292C1.60714 4.88319 1.62831 4.8355 1.66598 4.80034C1.70366 4.76518 1.75476 4.74542 1.80804 4.74542H4.28571V11.7454C4.28571 12.5739 5.00525 13.2454 5.89286 13.2454H9.10714V14.5579C9.10714 14.6077 9.08598 14.6553 9.0483 14.6905C9.01063 14.7257 8.95953 14.7454 8.90625 14.7454ZM13.192 11.7454H6.09375C6.04047 11.7454 5.98937 11.7257 5.9517 11.6905C5.91402 11.6553 5.89286 11.6077 5.89286 11.5579V1.93292C5.89286 1.88319 5.91402 1.8355 5.9517 1.80034C5.98937 1.76518 6.04047 1.74542 6.09375 1.74542H9.64286V4.49542C9.64286 4.90964 10.0026 5.24542 10.4464 5.24542H13.3929V11.5579C13.3929 11.6077 13.3717 11.6553 13.334 11.6905C13.2963 11.7257 13.2452 11.7454 13.192 11.7454ZM13.3929 3.74542H11.25V1.74542H11.5725C11.6258 1.74542 11.6769 1.76517 11.7146 1.80033L13.334 3.31183C13.3527 3.32924 13.3675 3.34991 13.3776 3.37266C13.3877 3.39542 13.3929 3.4198 13.3929 3.44442V3.74542Z" fill="#110B25"/>
            </svg>
          )}
        </button>
      </div>
      {isCopied && (
        <div className={classNames("copied-email-toast", "u-pad-i-l u-pad-b-m", "u-fontsize-1")}>
          <span className={classNames("copied-email-toast__email", "u-font-display")}>sim@simseneca.co.uk</span> 
          <span>copied ✌️</span>
        </div>
      )}      
    </>
  );
};