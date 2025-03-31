import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Chip } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Exercises for Building Muscle',
    excerpt: 'Learn the most effective exercises for muscle growth and strength development.',
    image: '/images/blog/muscle-building.jpg',
    date: 'March 31, 2024',
    category: 'Training',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Nutrition Guide for Athletes',
    excerpt: 'Discover the best nutrition strategies to fuel your workouts and optimize performance.',
    image: '/images/blog/nutrition.jpg',
    date: 'March 30, 2024',
    category: 'Nutrition',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Recovery Techniques for Better Results',
    excerpt: 'Essential recovery methods to prevent injury and improve workout results.',
    image: '/images/blog/recovery.jpg',
    date: 'March 29, 2024',
    category: 'Recovery',
    readTime: '6 min read'
  }
];

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Blog
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
        Stay updated with the latest fitness tips and trends
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item key={post.id} xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Chip label={post.category} color="primary" size="small" sx={{ mr: 1 }} />
                  <Chip label={post.readTime} size="small" />
                </Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography paragraph>
                  {post.excerpt}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {post.date}
                  </Typography>
                </Box>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button variant="outlined" fullWidth>
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog; 