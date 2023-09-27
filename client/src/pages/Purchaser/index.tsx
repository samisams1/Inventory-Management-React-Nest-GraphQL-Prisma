import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';
import NotificationPopup from '../../components/scensComponents/notification/NotificationPopup';

const SEND_NOTIFICATION_MUTATION = gql`
  mutation SendNotification($recipientId: Float!, $message: String!, $soundUrl: String!) {
    sendNotification(recipientId: $recipientId, message: $message, soundUrl: $soundUrl)
  }
`;

const YourComponent = () => {
  const [sendNotification] = useMutation(SEND_NOTIFICATION_MUTATION);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  const handleSendNotification = () => {
    sendNotification({
      variables: {
        recipientId: 4,
        message: 'hello',
        soundUrl: 'https://example.com/notification_sound.mp3',
      },
    })
      .then((response) => {
        // Handle the response here if needed
        console.log(response.data.sendNotification); // or update state accordingly
        setShowNotification(true); // Show the notification
        setTimeout(() => {
          setShowNotification(false); // Hide the notification after a period of time (e.g., 3 seconds)
        }, 3000);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleSendNotification}>Send Notification</button>
      {showNotification && <NotificationPopup message="Notification sent!" />}
    </div>
  );
};

export default YourComponent;