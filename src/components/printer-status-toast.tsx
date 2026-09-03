import { useState, useEffect } from 'preact/hooks';
import classNames from 'classnames';

import './printer-status-toast.css';

const DISMISSED_KEY = 'printer-status-toast-dismissed';

export const PrinterStatusToast = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setIsDismissed(sessionStorage.getItem(DISMISSED_KEY) === 'true');

    fetch('/api/printer-status')
      .then((response) => response.json())
      .then((data) => setIsOnline(Boolean(data.online)))
      .catch(() => setIsOnline(false));
  }, []);

  const handleDismiss = (event: MouseEvent) => {
    event.preventDefault();
    sessionStorage.setItem(DISMISSED_KEY, 'true');
    setIsDismissed(true);
  };

  if (!isOnline || isDismissed) return null;

  return (
    <div className={classNames("printer-status-toast")} role="status">
      <button
        type="button"
        className="printer-status-toast__close"
        aria-label="Dismiss"
        onClick={handleDismiss}
      >
        ×
      </button>
      <a href="/receipt" className="printer-status-toast__link">
        <div className="printer-status-toast__header">
          <div className="printer-status-toast__dot" />
          <p className="printer-status-toast__title u-subtitle smaller">Printer online</p>
        </div>
        <p className="printer-status-toast__description u-font-body">Send a message to my desk</p>
      </a>
    </div>
  );
};
