import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

interface TitleProps {
    title: string;
    summary: string;
    additional: string
    image?: string
}

export default function Title({
  title, summary, image, additional,
}: TitleProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar alt="Rhodh" src={image} sx={{ width: 70, height: 70 }} />
          </Grid>
        </Grid>
        <Typography variant="h5" align="center" color="text.secondary">
          {summary}
        </Typography>
        <Typography variant="subtitle2" align="center" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          {additional}
        </Typography>
      </Container>
    </Box>
  );
}
