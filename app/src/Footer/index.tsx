import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FooterProps {
    header: string;
}

export default function Footer({ header }: FooterProps) {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        {header}
      </Typography>
      {/* <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {subheader}
      </Typography> */}
    </Box>
  );
}
