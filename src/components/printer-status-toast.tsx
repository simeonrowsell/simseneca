import { useState, useEffect } from 'preact/hooks';
import classNames from 'classnames';

import './printer-status-toast.css';

export const PrinterStatusToast = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    fetch('/api/printer-status')
      .then((response) => response.json())
      .then((data) => setIsOnline(Boolean(data.online)))
      .catch(() => setIsOnline(false));
  }, []);

  if (!isOnline) return null;

  return (
    <a href="/receipt">
      <div className={classNames("printer-status-toast")} role="status">
        <div className="printer-status-toast__header">
          <div className="printer-status-toast__dot" />
          <p className="printer-status-toast__title u-subtitle smaller">Printer online</p>
        </div>
        <p className="printer-status-toast__description u-font-body">Send a message to my desk</p>
      </div>
    </a>
  );
};
