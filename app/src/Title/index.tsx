import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

interface TitleProps {
    title: string;
    summary: string;
    image?: string
}

export default function Title({ title, summary, image }: TitleProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Avatar alt="Rhodh" src={image} sx={{ width: 70, height: 70 }} />
          </Grid>
        </Grid>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {summary}
        </Typography>
      </Container>
    </Box>
  );
}
