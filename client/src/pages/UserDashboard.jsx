import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Tabs,
  Tab,
  Divider,
  Button,
  Chip,
  Paper,
  LinearProgress
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TimerIcon from '@mui/icons-material/Timer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalMallIcon from '@mui/icons-material/LocalMall';

// Mock data
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  memberSince: 'Jan 2023',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  fitnessLevel: 'Intermediate',
  points: 1250,
  progress: 75
};

const recentWorkouts = [
  { id: 1, name: 'Upper Body Strength', date: '2023-09-15', duration: '45 min', trainer: 'Mike Johnson' },
  { id: 2, name: 'HIIT Session', date: '2023-09-12', duration: '30 min', trainer: 'Sarah Smith' },
  { id: 3, name: 'Core Workout', date: '2023-09-10', duration: '25 min', trainer: 'David Wilson' }
];

const upcomingClasses = [
  { id: 1, name: 'Yoga Flow', date: '2023-09-20', time: '10:00 AM', trainer: 'Emma Davis' },
  { id: 2, name: 'Spin Class', date: '2023-09-22', time: '6:30 PM', trainer: 'Tom Parker' }
];

const recentOrders = [
  { id: '#ORD-12345', date: '2023-09-14', items: ['Protein Powder', 'Resistance Band'], total: '$49.99', status: 'Delivered' },
  { id: '#ORD-12346', date: '2023-08-30', items: ['Gym Gloves', 'Shaker Bottle'], total: '$28.50', status: 'Shipped' }
];

const UserDashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case 0: // Activity
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <FitnessCenterIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Recent Workouts
                  </Typography>
                  <List>
                    {recentWorkouts.map((workout) => (
                      <ListItem key={workout.id} divider>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>
                            <FitnessCenterIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={workout.name}
                          secondary={`${workout.date} · ${workout.duration} · Trainer: ${workout.trainer}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button sx={{ mt: 2 }} size="small">View All Workouts</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <EventIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Upcoming Classes
                  </Typography>
                  <List>
                    {upcomingClasses.map((cls) => (
                      <ListItem key={cls.id} divider>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            <EventIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={cls.name}
                          secondary={`${cls.date} · ${cls.time} · Trainer: ${cls.trainer}`}
                        />
                        <Button variant="outlined" size="small">Cancel</Button>
                      </ListItem>
                    ))}
                  </List>
                  <Button sx={{ mt: 2 }} size="small">Book New Class</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Fitness Stats</Typography>
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <FavoriteIcon color="error" sx={{ fontSize: 40 }} />
                      <Typography variant="h5">75 bpm</Typography>
                      <Typography variant="body2" color="text.secondary">Avg. Heart Rate</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <WhatshotIcon color="warning" sx={{ fontSize: 40 }} />
                      <Typography variant="h5">2,450</Typography>
                      <Typography variant="body2" color="text.secondary">Calories Burned</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <TimerIcon color="success" sx={{ fontSize: 40 }} />
                      <Typography variant="h5">14.5 hrs</Typography>
                      <Typography variant="body2" color="text.secondary">Active Time</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        );
      case 1: // Orders
        return (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <LocalMallIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Recent Orders
              </Typography>
              <List>
                {recentOrders.map((order) => (
                  <ListItem key={order.id} divider>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'info.main' }}>
                        <ShoppingBagIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<Typography variant="subtitle1">{order.id}</Typography>}
                      secondary={
                        <>
                          <Typography variant="body2" component="span">{order.date}</Typography><br />
                          <Typography variant="body2" component="span">{order.items.join(', ')}</Typography>
                        </>
                      }
                    />
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="subtitle2">{order.total}</Typography>
                      <Chip
                        size="small"
                        label={order.status}
                        color={order.status === 'Delivered' ? 'success' : 'primary'}
                        variant="outlined"
                      />
                    </Box>
                  </ListItem>
                ))}
              </List>
              <Button sx={{ mt: 2 }} size="small">View Order History</Button>
            </CardContent>
          </Card>
        );
      case 2: // Profile
        return (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <PersonIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Profile Information
              </Typography>
              <Box sx={{ p: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Full Name</Typography>
                    <Typography variant="body1" gutterBottom>{userData.name}</Typography>

                    <Typography variant="subtitle2">Email Address</Typography>
                    <Typography variant="body1" gutterBottom>{userData.email}</Typography>

                    <Typography variant="subtitle2">Member Since</Typography>
                    <Typography variant="body1" gutterBottom>{userData.memberSince}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Fitness Level</Typography>
                    <Typography variant="body1" gutterBottom>{userData.fitnessLevel}</Typography>

                    <Typography variant="subtitle2">Membership</Typography>
                    <Typography variant="body1" gutterBottom>Premium Plan</Typography>

                    <Typography variant="subtitle2">Next Billing</Typography>
                    <Typography variant="body1" gutterBottom>October 15, 2023</Typography>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3 }}>
                  <Button variant="contained">Edit Profile</Button>
                  <Button variant="outlined" sx={{ ml: 2 }}>Change Password</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                src={userData.avatar}
                alt={userData.name}
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h5" gutterBottom>{userData.name}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {userData.email}
              </Typography>
              <Chip
                label={`${userData.fitnessLevel} Level`}
                color="primary"
                variant="outlined"
                sx={{ mt: 1 }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <MenuBookIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Fitness Progress
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Progress</Typography>
                  <Typography variant="body2">{userData.progress}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={userData.progress}
                  sx={{ height: 8, borderRadius: 5 }}
                />
                <Box sx={{ mt: 3, mb: 1 }}>
                  <Typography variant="body2" gutterBottom>Reward Points</Typography>
                  <Typography variant="h6" color="primary">{userData.points} pts</Typography>
                </Box>
                <Button variant="outlined" size="small" fullWidth>
                  Redeem Points
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ mb: 3 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="dashboard tabs"
            >
              <Tab icon={<FitnessCenterIcon />} label="Activity" />
              <Tab icon={<ShoppingBagIcon />} label="Orders" />
              <Tab icon={<PersonIcon />} label="Profile" />
            </Tabs>
          </Paper>

          {renderTabContent()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;