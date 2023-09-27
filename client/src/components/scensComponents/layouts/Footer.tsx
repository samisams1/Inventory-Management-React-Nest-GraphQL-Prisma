import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    marginTop: 'auto',
  },
};

export default Footer;