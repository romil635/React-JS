import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 500  , marginLeft: 10, mt: 2 }}>
      <CardMedia
        sx={{ height: 450 }}
        image="https://www.shutterstock.com/image-photo/web-development-coding-programming-internet-260nw-1141706672.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Webdevelopment
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Where the Web was born. Tim Berners-Lee, a British scientist, invented the World Wide Web (WWW) in 1989, while working at CERN. The Web was originally conceived and developed to meet the demand for automated information-sharing between scientists in universities and institutes around the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="md">Share</Button>
        <Button size="md">Learn More</Button>
      </CardActions>
    </Card>
  );
}