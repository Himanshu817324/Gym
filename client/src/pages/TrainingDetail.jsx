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
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Stack,
} from '@mui/material';
import {
  Event as EventIcon,
  AccessTime as AccessTimeIcon,
  FitnessCenter as FitnessCenterIcon,
  Person as PersonIcon,
  CheckCircle as CheckCircleIcon,
  StarBorder as StarBorderIcon,
  AttachMoney as AttachMoneyIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';

// Mock training program data
const training = {
  id: 't1',
  title: 'Advanced Strength Training Program',
  trainer: {
    name: 'Michael Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Certified Personal Trainer with 10+ years of experience specializing in strength training and athletic performance.',
    rating: 4.9,
  },
  price: 99.99,
  rating: 4.8,
  reviews: 65,
  duration: '8 weeks',
  level: 'Advanced',
  category: 'Strength Training',
  location: 'Main Gym Floor',
  description: 'This comprehensive 8-week strength training program is designed for advanced fitness enthusiasts looking to build significant muscle mass and strength. The program incorporates progressive overload principles with periodization to maximize results.',
  schedule: [
    { day: 'Monday', time: '7:00 AM - 8:30 AM', available: true },
    { day: 'Monday', time: '6:00 PM - 7:30 PM', available: true },
    { day: 'Wednesday', time: '7:00 AM - 8:30 AM', available: false },
    { day: 'Wednesday', time: '6:00 PM - 7:30 PM', available: true },
    { day: 'Friday', time: '7:00 AM - 8:30 AM', available: true },
    { day: 'Friday', time: '6:00 PM - 7:30 PM', available: false },
  ],
  objectives: [
    'Increase overall strength by 15-20%',
    'Improve muscle hypertrophy and definition',
    'Enhance power output and athletic performance',
    'Develop proper form and technique for compound lifts',
    'Build a sustainable training routine for long-term progress'
  ],
  requirements: [
    'Minimum 1-2 years of regular strength training experience',
    'Familiarity with basic compound movements (squat, deadlift, bench press)',
    'Good physical health with no major injuries',
    'Ability to commit to at least 3 training sessions per week',
    'Completion of a fitness assessment before starting'
  ],
  equipment: [
    'Barbell and weight plates',
    'Dumbbells (various weights)',
    'Squat rack',
    'Bench press station',
    'Cable machines',
    'Kettlebells'
  ],
  includes: [
    'Initial fitness assessment',
    'Customized training program',
    '8 weeks of guided workouts',
    'Weekly progress tracking',
    'Nutrition guidelines',
    'Access to mobile app for workout logging'
  ],
  images: [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  ],
  relatedPrograms: [
    { id: 't2', title: 'Functional Fitness Bootcamp', price: 79.99, level: 'Intermediate', image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 't3', title: 'Olympic Weightlifting', price: 119.99, level: 'Advanced', image: 'https://images.unsplash.com/photo-1604247584233-19c5dd6eac6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 't4', title: 'HIIT Cardio Challenge', price: 89.99, level: 'All Levels', image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' }
  ]
};

const TrainingDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [openBookingDialog, setOpenBookingDialog] = useState(false);
  const [selectedSession, setSelectedSession] = useState('');

  const handleOpenBooking = () => {
    setOpenBookingDialog(true);
  };

  const handleCloseBooking = () => {
    setOpenBookingDialog(false);
  };

  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
  };

  const handleBookSession = () => {
    console.log('Booking session:', selectedSession);
    handleCloseBooking();
    // In a real app, this would make an API call to book the session
  };

  const availableSessions = training.schedule.filter(session => session.available);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Training Images */}
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              image={training.images[selectedImage]}
              alt={training.title}
              sx={{ height: 400, objectFit: 'cover' }}
            />
          </Card>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            {training.images.map((image, index) => (
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
                <img src={image} alt={`${training.title} view ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Training Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {training.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Chip
              icon={<FitnessCenterIcon />}
              label={training.category}
              variant="outlined"
              sx={{ mr: 1 }}
            />
            <Chip
              icon={<AccessTimeIcon />}
              label={training.duration}
              variant="outlined"
              sx={{ mr: 1 }}
            />
            <Chip
              label={training.level}
              color={
                training.level === 'Beginner' ? 'success' :
                  training.level === 'Intermediate' ? 'primary' :
                    'error'
              }
              variant="outlined"
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Rating value={training.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {training.rating} ({training.reviews} reviews)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              ${training.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              per person
            </Typography>
          </Box>

          <Typography variant="body1" paragraph>
            {training.description}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2">{training.location}</Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleOpenBooking}
            sx={{ mb: 2 }}
          >
            Book a Session
          </Button>

          <Divider sx={{ my: 3 }} />

          {/* Trainer Info */}
          <Typography variant="h6" gutterBottom>
            About the Trainer
          </Typography>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <Avatar
              src={training.trainer.avatar}
              alt={training.trainer.name}
              sx={{ width: 64, height: 64, mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {training.trainer.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating value={training.trainer.rating} precision={0.1} size="small" readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {training.trainer.rating}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {training.trainer.bio}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Program Details */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom>Program Objectives</Typography>
            <List>
              {training.objectives.map((objective, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={objective} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom>Requirements</Typography>
            <List>
              {training.requirements.map((requirement, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarBorderIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={requirement} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom>Schedule</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Day</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Availability</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {training.schedule.map((session, index) => (
                    <TableRow key={index}>
                      <TableCell>{session.day}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>
                        <Chip
                          label={session.available ? 'Available' : 'Full'}
                          color={session.available ? 'success' : 'error'}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  <FitnessCenterIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  Equipment Used
                </Typography>
                <List dense>
                  {training.equipment.map((equipment, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={equipment} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  <AttachMoneyIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                  What's Included
                </Typography>
                <List dense>
                  {training.includes.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Related Programs */}
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>Related Programs</Typography>
          <Grid container spacing={3}>
            {training.relatedPrograms.map((program) => (
              <Grid item xs={12} sm={6} md={4} key={program.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={program.image}
                    alt={program.title}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{program.title}</Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>${program.price.toFixed(2)}</Typography>
                      <Chip
                        label={program.level}
                        size="small"
                        color={
                          program.level === 'Beginner' ? 'success' :
                            program.level === 'Intermediate' ? 'primary' :
                              program.level === 'Advanced' ? 'error' :
                                'default'
                        }
                      />
                    </Stack>
                    <Button variant="outlined" fullWidth sx={{ mt: 2 }}>View Program</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Booking Dialog */}
      <Dialog open={openBookingDialog} onClose={handleCloseBooking} maxWidth="sm" fullWidth>
        <DialogTitle>Book a Training Session</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" gutterBottom>
            {training.title} with {training.trainer.name}
          </Typography>
          <Typography variant="body2" paragraph>
            Please select your preferred session time:
          </Typography>
          <TextField
            select
            fullWidth
            value={selectedSession}
            onChange={handleSessionChange}
            label="Available Sessions"
            margin="normal"
            required
          >
            {availableSessions.map((session, index) => (
              <MenuItem key={index} value={`${session.day}, ${session.time}`}>
                {session.day}, {session.time}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" gutterBottom>
              <strong>Price:</strong> ${training.price.toFixed(2)} per person
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Location:</strong> {training.location}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Duration:</strong> {training.duration}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBooking}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleBookSession}
            disabled={!selectedSession}
          >
            Book Now
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TrainingDetail; 