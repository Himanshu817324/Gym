import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Chip,
  Rating,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Paper,
} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';

// Mock product data
const product = {
  id: 'p1',
  name: 'Premium Adjustable Dumbbell Set',
  price: 299.99,
  salePrice: 249.99,
  rating: 4.7,
  reviews: 128,
  inStock: true,
  description: 'This premium adjustable dumbbell set offers versatile weight options ranging from 5 to 52.5 pounds per dumbbell. Perfect for home gyms and space-saving workout solutions, this set replaces 15 pairs of traditional dumbbells.',
  features: [
    'Weight range: 5-52.5 pounds per dumbbell',
    'Adjustable in 2.5-pound increments',
    'Space-saving design',
    'Durable cast iron construction with chrome-plated handles',
    'Easy weight selection with dial system',
    'Includes storage trays for each dumbbell'
  ],
  specifications: {
    'Material': 'Cast iron plates with chrome-plated steel handles',
    'Dimensions': '16.9" x 8.3" x 9.5" (L x W x H)',
    'Weight': '105 lbs (total set)',
    'Warranty': '2 years manufacturer warranty',
    'Includes': '2 adjustable dumbbells, 2 storage trays, user manual'
  },
  images: [
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1540558870477-71782255d6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  ],
  category: 'Equipment',
  tags: ['weights', 'strength training', 'home gym'],
  relatedProducts: [
    { id: 'p2', name: 'Rubber Hex Dumbbells', price: 89.99, image: 'https://images.unsplash.com/photo-1579143191677-9395e640b667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 'p3', name: 'Adjustable Weight Bench', price: 179.99, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 'p4', name: 'Weightlifting Gloves', price: 24.99, image: 'https://images.unsplash.com/photo-1632165254971-1dbce0e9917b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' }
  ]
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(10, quantity + value));
    setQuantity(newQuantity);
  };

  const discount = Math.round(((product.price - product.salePrice) / product.price) * 100);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              image={product.images[selectedImage]}
              alt={product.name}
              sx={{ height: 400, objectFit: 'contain' }}
            />
          </Card>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            {product.images.map((image, index) => (
              <Box
                key={index}
                onClick={() => setSelectedImage(index)}
                sx={{
                  width: 80,
                  height: 80,
                  border: index === selectedImage ? '2px solid' : '1px solid',
                  borderColor: index === selectedImage ? 'primary.main' : 'divider',
                  borderRadius: 1,
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {product.rating} ({product.reviews} reviews)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              ${product.salePrice.toFixed(2)}
            </Typography>
            {product.salePrice < product.price && (
              <>
                <Typography variant="body1" sx={{ textDecoration: 'line-through', ml: 2, color: 'text.secondary' }}>
                  ${product.price.toFixed(2)}
                </Typography>
                <Chip label={`Save ${discount}%`} color="error" size="small" sx={{ ml: 2 }} />
              </>
            )}
          </Box>

          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Chip
              label={product.inStock ? 'In Stock' : 'Out of Stock'}
              color={product.inStock ? 'success' : 'error'}
              variant="outlined"
              sx={{ mr: 2 }}
            />
            <Typography variant="body2" color="text.secondary">
              Category: {product.category}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Typography variant="body1" sx={{ mr: 2 }}>Quantity:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
              <IconButton size="small" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                <RemoveIcon />
              </IconButton>
              <TextField
                value={quantity}
                inputProps={{ min: 1, max: 10, readOnly: true }}
                sx={{ width: '60px', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, textAlign: 'center' }}
              />
              <IconButton size="small" onClick={() => handleQuantityChange(1)} disabled={quantity >= 10}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              disabled={!product.inStock}
              sx={{ flex: 1 }}
            >
              Add to Cart
            </Button>
            <IconButton sx={{ border: '1px solid', borderColor: 'divider' }}>
              <FavoriteIcon />
            </IconButton>
            <IconButton sx={{ border: '1px solid', borderColor: 'divider' }}>
              <ShareIcon />
            </IconButton>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
              Tags:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {product.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Product Details Tabs */}
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs value={tabValue} onChange={handleTabChange} aria-label="product details tabs">
              <Tab label="Features" />
              <Tab label="Specifications" />
              <Tab label="Reviews" />
            </Tabs>
          </Box>

          {/* Features Tab */}
          {tabValue === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>Product Features</Typography>
              <List>
                {product.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Specifications Tab */}
          {tabValue === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>Technical Specifications</Typography>
              <List>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={12} sm={4}>
                          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{key}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Typography variant="body1">{value}</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    {index < Object.entries(product.specifications).length - 1 && <Divider component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </Box>
          )}

          {/* Reviews Tab */}
          {tabValue === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>Customer Reviews</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 4 }}>
                  <Typography variant="h3">{product.rating}</Typography>
                  <Rating value={product.rating} precision={0.1} readOnly />
                  <Typography variant="body2">Based on {product.reviews} reviews</Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2">This is a mock product page. In a real application, this section would display customer reviews with ratings, comments, and dates.</Typography>
                </Box>
              </Box>
              <Button variant="outlined" sx={{ mb: 3 }}>Write a Review</Button>
            </Box>
          )}
        </Grid>

        {/* Related Products */}
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 3 }}>Related Products</Typography>
          <Grid container spacing={3}>
            {product.relatedProducts.map((relatedProduct) => (
              <Grid item xs={12} sm={6} md={4} key={relatedProduct.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={relatedProduct.image}
                    alt={relatedProduct.name}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{relatedProduct.name}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>${relatedProduct.price.toFixed(2)}</Typography>
                    <Button variant="outlined" fullWidth>View Product</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail; 