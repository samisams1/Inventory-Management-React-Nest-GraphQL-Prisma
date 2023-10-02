import React, { useContext, useEffect, useState } from 'react';
import { useSubscription } from '@apollo/client';
import { gql } from '@apollo/client';
import { toast } from 'react-toastify';
import { UserContext } from '../../components/auth/UserContext';
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom';

const NOTIFICATION_SUBSCRIPTION = gql`
  subscription {
    notification {
      recipientId
      message
      soundUrl
    }
  }
`;

interface Notification {
  recipientId: number;
  message: string;
  soundUrl: string;
}

export const OrderNotification = () => {
  const {currentUser} = useContext(UserContext);
  const navigate = useNavigate();
  if(!currentUser){
    return <Spinner/>
  }
  const [notification, setNotification] = useState<Notification | null>(null);

  // Subscribe to the notification subscription
  const { data, error } = useSubscription<{ notification: Notification }>(NOTIFICATION_SUBSCRIPTION);

  useEffect(() => {
    // Update the notification state when a new notification is received
    if (data && data.notification) {
      setNotification(data.notification);
    }
  }, [data]);

  if (error) {
    console.error('Error in notification subscription:', error);
  }

  // Check if notification exists and recipientId matches currentUser.id
  if (notification && notification.recipientId === currentUser.id) {
    // Check if the browser supports the Notification API and permission is granted
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      // Show the desktop notification
      const notification = new Notification('Notification Message', {
        body: 'You have a new request from the shop',
        icon: 'notification-icon.png', // Replace with the path to your notification icon
      });

      // Play the sound
      const sound = new Audio('/not.wav'); // Replace with the path to your notification sound file
      sound.play();

      // Open the detail page on notification click
      const id = 1;
      notification.onclick = () => {
       // navigate(`/notificationDetail?id=${id}`);
    //   navigate('/order')
      };
    } else {
      // Fallback to React-Toastify if Notification API is not supported or permission is not granted
      toast.success(notification.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000, // Close the notification after 5 seconds
        hideProgressBar: true, // Hide the progress bar
        closeOnClick: true, // Close the notification when clicked
        draggable: true, // Allow dragging the notification
        // Add onOpen property to play a sound
        onOpen: () => {
          const sound = new Audio('/not.wav');
          sound.play();
        },
      });
    }
  }

  // Render the received notification
  return (
    <div>
      {notification && (
        <div>
          <h4>Notification</h4>
          <p>Recipient ID: {notification.recipientId}</p>
          <p>Message: {notification.message}</p>
          <p>Sound URL: {notification.soundUrl}</p>
        </div>
      )}
    </div>
  );
};

export default OrderNotification;
