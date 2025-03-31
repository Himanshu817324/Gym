import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const products = [
  {
    id: 1,
    name: 'Premium Dumbbell Set',
    description: 'Professional-grade dumbbells with adjustable weights',
    image: '/images/shop/dumbbells.jpg',
    price: 299.99,
    category: 'Equipment'
  },
  {
    id: 2,
    name: 'Yoga Mat Pro',
    description: 'High-quality, non-slip yoga mat with carrying strap',
    image: '/images/shop/yoga-mat.jpg',
    price: 49.99,
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Resistance Bands Set',
    description: 'Complete set of resistance bands for full-body workouts',
    image: '/images/shop/resistance-bands.jpg',
    price: 39.99,
    category: 'Equipment'
  }
];

const Shop = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Shop
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
        Find the perfect equipment for your fitness journey
      </Typography>

      <Box sx={{ mb: 6 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search products..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography paragraph>
                  {product.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Category: {product.category}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button variant="contained" fullWidth>
                  Add to Cart
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop; 