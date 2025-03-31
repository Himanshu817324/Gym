import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

// 3D Model Component (placeholder - you'll need to add your own 3D model)
function GymModel() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </Float>
  );
}

function Home() {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: 'John Doe',
      image: '/testimonials/john.jpg',
      text: 'FitNexus transformed my fitness journey. The trainers are amazing!',
    },
    {
      name: 'Jane Smith',
      image: '/testimonials/jane.jpg',
      text: 'Best gym equipment and training programs I\'ve ever experienced.',
    },
    {
      name: 'Mike Johnson',
      image: '/testimonials/mike.jpg',
      text: 'The community here is incredible. Highly recommended!',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Transform Your Life
                  <br />
                  With FitNexus
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 4, color: 'text.secondary' }}
                >
                  Your journey to a healthier lifestyle starts here
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/training')}
                    className="btn-primary"
                  >
                    Join Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/shop')}
                    className="btn-secondary"
                  >
                    Shop Now
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '60vh' }}>
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <Suspense fallback={null}>
                    <GymModel />
                    <OrbitControls enableZoom={false} />
                    <Environment preset="city" />
                  </Suspense>
                </Canvas>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Popular Services Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 6 }}
            data-aos="fade-up"
          >
            Popular Services
          </Typography>
          <Grid container spacing={4}>
            {['Personal Training', 'Group Classes', 'Nutrition Planning'].map(
              (service, index) => (
                <Grid item xs={12} md={4} key={service}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={`/services/${service.toLowerCase().replace(' ', '-')}.jpg`}
                        alt={service}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {service}
                        </Typography>
                        <Typography>
                          Experience the best in fitness with our professional
                          {service.toLowerCase()} services.
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 6 }}
            data-aos="fade-up"
          >
            Success Stories
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={testimonial.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={testimonial.image}
                      alt={testimonial.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {testimonial.name}
                      </Typography>
                      <Typography>{testimonial.text}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 