import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface DisplayCardProps {
    image: string;
    heading: string;
    describe: string;
    url: string
    linkLabel: string;
}

export default function DisplayCard({
  image, heading, describe, url, linkLabel,
} : DisplayCardProps) {
  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        sx={{
          pt: '10%',
        }}
        image={image}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {heading}
        </Typography>
        <Typography>
          {describe}
        </Typography>
      </CardContent>
      <Link href={url} gutterBottom variant="subtitle1" textAlign="center">
        {linkLabel}
      </Link>
    </Card>
  );
}
