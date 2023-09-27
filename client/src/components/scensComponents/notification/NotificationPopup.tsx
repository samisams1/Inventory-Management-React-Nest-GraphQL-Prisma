import React, { useState, useEffect } from 'react';
import './NotificationPopup.css';

interface NotificationPopupProps {
  message: string;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return visible ? <div className="notification-popup">
    {message}
    <audio src={process.env.PUBLIC_URL + '/not.wav'} autoPlay />
    </div> : null;
};

export default NotificationPopup;