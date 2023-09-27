import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

const ScrollbarStyle = styled(Scrollbars)(({ theme }) => ({
  maxHeight: '100%',
  '& .scrollbar-thumb': {
    backgroundColor: alpha(theme.palette.grey[600], 0.48),
  },
  '& .scrollbar-thumb:focus': {
    opacity: 1,
  },
  '& .scrollbar-track': {
    width: 10,
  },
  '& .scrollbar-track.scrollbar-track-y': {
    borderRadius: 8,
  },
  '& .scrollbar-thumb.scrollbar-thumb-y': {
    borderRadius: 8,
  },
  '& .scrollbar-track-x': {
    height: 6,
  },
  '& .scrollbar-thumb.scrollbar-thumb-x': {
    borderRadius: 6,
  },
}));

// ----------------------------------------------------------------------

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default function Scrollbar({ children, sx, ...other }) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <ScrollbarStyle autoHide timeout={500} renderThumbVertical={({ style }) => <div style={{ ...style }} className="scrollbar-thumb" />} {...other}>
        {children}
      </ScrollbarStyle>
    </RootStyle>
  );
}