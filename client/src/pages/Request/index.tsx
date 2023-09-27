import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { Alert, Box, Container, Grid } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import { gql, useMutation } from '@apollo/client';
import { CREATE_ORDER_MUTATION, ORDER_DETAIL_QUERY, ORDER_QUERY } from '../../graphql/Order';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import ReplenishmentForm from '../../components/scensComponents/Replenishment/ReplenishmentForm';
import ContactSupportTwoToneIcon from '@material-ui/icons/ContactSupportTwoTone';
import { UserContext } from '../../components/auth/UserContext';
import Spinner from '../../components/Spinner';

interface Product {
  productId: string;
  quantity: string;
}

const Request = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Spinner />;
  }

  const [createOrder, { data }] = useMutation(CREATE_ORDER_MUTATION, {
    update: (cache, { data }) => {},
  });

  const SEND_NOTIFICATION_MUTATION = gql`
    mutation SendNotification($recipientId: Float!, $message: String!, $soundUrl: String!) {
      sendNotification(recipientId: $recipientId, message: $message, soundUrl: $soundUrl)
    }
  `;

  const [sendNotification] = useMutation(SEND_NOTIFICATION_MUTATION);

  useEffect(() => {
    // Request permission to show notifications when the component mounts
    if (typeof window !== 'undefined' && 'Notification' in window) {
      Notification.requestPermission();
    }
  }, []);

  const navigate = useNavigate();

  const handleSendNotification = (): void => {
    const recipientId = 2; // Replace with the recipient's ID

    sendNotification({
      variables: {
        recipientId,
        message: 'You have a new request from the shop',
        soundUrl: 'https://example.com/notification_sound.mp3',
      },
      refetchQueries: [ORDER_QUERY],
    })
      .then((response) => {
        // Handle the response here if needed
        console.log(response.data.sendNotification); // or update state accordingly

        // Check if the recipient ID matches the current user ID and role is "MANAGER"
        if (recipientId === currentUser.id) {
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
              navigate(`/notificationDetail?id=${id}`);
            };
          } else {
            // Fallback to React-Toastify if Notification API is not supported or permission is not granted
            toast.success(response.data.sendNotification.message, {
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
      })
      .catch((error: Error) => {
        // Handle errors
        console.error(error);
      });
  };

  const handleSubmit = async (updatedProducts: Product[]) => {
    // Convert the product values to numbers
    let totalQuantity = 0;
    const formattedProducts = updatedProducts.map((product) => ({
      productId: parseInt(product.productId.toString(), 10),
      quantity: parseInt(product.quantity.toString(), 10),
    }));

    formattedProducts.forEach((product) => {
      totalQuantity += product.quantity;
    });

    const input = {
      sellerId: currentUser.id,
      totalQuantity: totalQuantity,
      status: 'pending',
      orderDetails: formattedProducts,
    };

    try {
      await createOrder({
        variables: { input },
        refetchQueries: [ORDER_QUERY, ORDER_DETAIL_QUERY],
      });
      await handleSendNotification(); // Send the notification
      setSuccessMessage("Send Order Success Message");
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error: any) {
      console.error('Error submitting products:', error);
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
    }
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Head>
          <title>Request | Inventory</title>
        </Head>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {successMessage && (
              <Alert variant="outlined" severity="info" sx={{ mx: 'auto', mb: 2, width: '50%', textAlign: 'center' }}>
                {successMessage}
              </Alert>
            )}
            {errorMessage && (
              <Alert variant="outlined" severity="error" sx={{ mx: 'auto', mb: 2, width: '50%', textAlign: 'center' }}>
                {errorMessage}
              </Alert>
            )}
            <Grid item xs={12} md={12} lg={12}>
              <PageHeader
                title="Request"
                subTitle="This is Request Form you can ask request to Shop"
                icon={<ContactSupportTwoToneIcon fontSize="large" />}
              />
              <ReplenishmentForm onSubmit={handleSubmit} />
            </Grid>
          </Grid>
        </Container>
        <ToastContainer position="top-right" autoClose={5000} />
      </Box>
    </>
  );
};

export default Request;