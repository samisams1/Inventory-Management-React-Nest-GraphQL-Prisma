self.addEventListener('push', function(event) {
    // Parse the incoming push notification data
    const notification = event.data.json();
  
    // Customize the notification options
    const options = {
      body: notification.message,
      icon: 'notification-icon.png', // Replace with the path to your notification icon
      data: { url: notification.url }, // Pass additional data if needed
    };
  
    // Display the notification
    event.waitUntil(
      self.registration.showNotification('Notification Message', options)
    );
  });