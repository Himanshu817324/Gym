import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

const trainingPrograms = [
  {
    id: 1,
    title: 'Personal Training',
    description: 'One-on-one training sessions with certified trainers',
    image: '/images/training/personal.jpg',
    price: '$99/session',
    duration: '1 hour',
    level: 'All Levels'
  },
  {
    id: 2,
    title: 'Group Classes',
    description: 'High-energy group workouts for all fitness levels',
    image: '/images/training/group.jpg',
    price: '$29/class',
    duration: '45-60 mins',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Online Training',
    description: 'Virtual training sessions from the comfort of your home',
    image: '/images/training/online.jpg',
    price: '$79/session',
    duration: '1 hour',
    level: 'All Levels'
  }
];

const Training = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Training Programs
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
        Choose the perfect training program for your fitness goals
      </Typography>

      <Grid container spacing={4}>
        {trainingPrograms.map((program) => (
          <Grid item key={program.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={program.image}
                alt={program.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {program.title}
                </Typography>
                <Typography paragraph>
                  {program.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {program.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Level: {program.level}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    {program.price}
                  </Typography>
                </Box>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button variant="contained" fullWidth>
                  Book Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Training; 