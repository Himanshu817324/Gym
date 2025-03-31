import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Tab,
  Tabs,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  PeopleAlt,
  ShoppingBag,
  Dashboard,
  BarChart,
  Search,
  Edit,
  Delete,
  CheckCircle,
  Cancel,
  ArrowUpward,
  ArrowDownward,
  Visibility,
  AddCircle,
  Block,
  NorthEast,
  SouthEast
} from '@mui/icons-material';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const AdminDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  // Sample data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'member', status: 'active', joined: '2023-01-15', plan: 'Premium' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'member', status: 'active', joined: '2023-02-20', plan: 'Standard' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'trainer', status: 'active', joined: '2022-11-05', plan: 'N/A' },
    { id: 4, name: 'Lisa Brown', email: 'lisa@example.com', role: 'member', status: 'inactive', joined: '2023-03-10', plan: 'Basic' },
    { id: 5, name: 'Tom Wilson', email: 'tom@example.com', role: 'admin', status: 'active', joined: '2022-08-15', plan: 'N/A' },
  ];

  const orders = [
    { id: 'ORD-2023-001', customer: 'John Doe', date: '2023-07-15', total: '$129.99', status: 'Delivered', items: 2 },
    { id: 'ORD-2023-002', customer: 'Jane Smith', date: '2023-08-22', total: '$89.95', status: 'Processing', items: 2 },
    { id: 'ORD-2023-003', customer: 'Mike Johnson', date: '2023-09-10', total: '$215.50', status: 'Shipped', items: 3 },
    { id: 'ORD-2023-004', customer: 'Lisa Brown', date: '2023-09-15', total: '$45.99', status: 'Pending', items: 1 },
    { id: 'ORD-2023-005', customer: 'Tom Wilson', date: '2023-09-18', total: '$178.50', status: 'Processing', items: 4 },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'purchased a Premium Membership', time: '10 minutes ago', avatar: '/avatar1.jpg' },
    { id: 2, user: 'Jane Smith', action: 'enrolled in "Weight Loss Program"', time: '2 hours ago', avatar: '/avatar2.jpg' },
    { id: 3, user: 'Mike Johnson', action: 'added a new training session', time: '5 hours ago', avatar: '/avatar3.jpg' },
    { id: 4, user: 'Admin', action: 'updated the pricing plan', time: 'Yesterday', avatar: '/avatar4.jpg' },
  ];

  // Chart data
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [12500, 14000, 15500, 14800, 16000, 17500, 16800, 18000, 19500],
        fill: false,
        borderColor: '#0ea5e9',
        tension: 0.1,
      },
    ],
  };

  const membershipData = {
    labels: ['Basic', 'Standard', 'Premium'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#38bdf8', '#0ea5e9', '#0284c7'],
        borderWidth: 0,
      },
    ],
  };

  const visitorData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Weekly Visitors',
        data: [150, 230, 180, 290, 220, 340, 310],
        backgroundColor: '#0ea5e9',
      },
    ],
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case 0: // Dashboard
        return (
          <Grid container spacing={3}>
            {/* Quick Stats */}
            <Grid item xs={12} md={3}>
              <Card sx={{ bgcolor: 'primary.light' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      Total Users
                    </Typography>
                    <PeopleAlt sx={{ color: 'white' }} />
                  </Box>
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    245
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <NorthEast sx={{ color: 'white', fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      +12% from last month
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ bgcolor: 'success.light' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      Revenue
                    </Typography>
                    <ShoppingBag sx={{ color: 'white' }} />
                  </Box>
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    $18.5k
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <NorthEast sx={{ color: 'white', fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      +8% from last month
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ bgcolor: 'warning.light' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      Products
                    </Typography>
                    <ShoppingBag sx={{ color: 'white' }} />
                  </Box>
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    152
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <NorthEast sx={{ color: 'white', fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      +5 new this week
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ bgcolor: 'info.light' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      Classes
                    </Typography>
                    <ShoppingBag sx={{ color: 'white' }} />
                  </Box>
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    48
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <SouthEast sx={{ color: 'white', fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      85% occupancy rate
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Charts */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Monthly Sales</Typography>
                <Line
                  data={salesData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Sales by Category</Typography>
                <Doughnut
                  data={membershipData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: 'bottom',
                      },
                    },
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Weekly Gym Visits</Typography>
                <Bar
                  data={visitorData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Recent Orders</Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orders.slice(0, 5).map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>${order.total}</TableCell>
                          <TableCell>
                            <Chip
                              label={order.status}
                              color={
                                order.status === 'Delivered' ? 'success' :
                                  order.status === 'Shipped' ? 'info' :
                                    order.status === 'Processing' ? 'warning' : 'default'
                              }
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Button size="small">View</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ mt: 2, textAlign: 'right' }}>
                  <Button size="small" onClick={() => setTabValue(3)}>View All Orders</Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        );
      case 1: // Users
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">User Management</Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                      size="small"
                      placeholder="Search users..."
                      InputProps={{
                        startAdornment: <Search fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />,
                      }}
                    />
                    <Button variant="contained" startIcon={<AddCircle />}>
                      Add User
                    </Button>
                  </Box>
                </Box>

                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Join Date</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Avatar src={user.avatar} sx={{ mr: 2 }} />
                              <Typography variant="body2">{user.name}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <Chip
                              label={user.status}
                              color={user.status === 'active' ? 'success' : 'default'}
                              size="small"
                            />
                          </TableCell>
                          <TableCell>{user.joined}</TableCell>
                          <TableCell align="right">
                            <IconButton size="small" color="primary">
                              <Edit fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color={user.status === 'active' ? 'warning' : 'success'}>
                              {user.status === 'active' ? <Block fontSize="small" /> : <CheckCircle fontSize="small" />}
                            </IconButton>
                            <IconButton size="small" color="error">
                              <Delete fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        );
      case 2: // Products
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Product Management</Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                      size="small"
                      placeholder="Search products..."
                      InputProps={{
                        startAdornment: <Search fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />,
                      }}
                    />
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                      <InputLabel>Category</InputLabel>
                      <Select label="Category" defaultValue="all">
                        <MenuItem value="all">All Categories</MenuItem>
                        <MenuItem value="Equipment">Equipment</MenuItem>
                        <MenuItem value="Nutrition">Nutrition</MenuItem>
                        <MenuItem value="Apparel">Apparel</MenuItem>
                        <MenuItem value="Electronics">Electronics</MenuItem>
                      </Select>
                    </FormControl>
                    <Button variant="contained" startIcon={<AddCircle />}>
                      Add Product
                    </Button>
                  </Box>
                </Box>

                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {productsList.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>{product.id}</TableCell>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>${product.price.toFixed(2)}</TableCell>
                          <TableCell>{product.stock}</TableCell>
                          <TableCell>
                            <Chip
                              label={product.status}
                              color={
                                product.status === 'Available' ? 'success' :
                                  product.status === 'Low Stock' ? 'warning' :
                                    'error'
                              }
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <IconButton size="small" color="primary">
                              <Edit fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color="error">
                              <Delete fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        );
      case 3: // Orders
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Order Management</Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                      size="small"
                      placeholder="Search orders..."
                      InputProps={{
                        startAdornment: <Search fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />,
                      }}
                    />
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                      <InputLabel>Status</InputLabel>
                      <Select label="Status" defaultValue="all">
                        <MenuItem value="all">All Statuses</MenuItem>
                        <MenuItem value="Delivered">Delivered</MenuItem>
                        <MenuItem value="Shipped">Shipped</MenuItem>
                        <MenuItem value="Processing">Processing</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="Cancelled">Cancelled</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>${order.total}</TableCell>
                          <TableCell>
                            <Chip
                              label={order.status}
                              color={
                                order.status === 'Delivered' ? 'success' :
                                  order.status === 'Shipped' ? 'info' :
                                    order.status === 'Processing' ? 'warning' :
                                      order.status === 'Pending' ? 'default' :
                                        'error'
                              }
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <IconButton size="small" color="primary">
                              <Edit fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color="error">
                              <Delete fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        );
      case 4: // Training Classes
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Training Management</Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                      size="small"
                      placeholder="Search classes..."
                      InputProps={{
                        startAdornment: <Search fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />,
                      }}
                    />
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                      <InputLabel>Category</InputLabel>
                      <Select label="Category" defaultValue="all">
                        <MenuItem value="all">All Categories</MenuItem>
                        <MenuItem value="Personal">Personal</MenuItem>
                        <MenuItem value="Group">Group</MenuItem>
                        <MenuItem value="Workshop">Workshop</MenuItem>
                        <MenuItem value="Consultation">Consultation</MenuItem>
                      </Select>
                    </FormControl>
                    <Button variant="contained" startIcon={<AddCircle />}>
                      Add Class
                    </Button>
                  </Box>
                </Box>

                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Class Name</TableCell>
                        <TableCell>Trainer</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Enrollment</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {trainingsList.map((training) => (
                        <TableRow key={training.id}>
                          <TableCell>{training.id}</TableCell>
                          <TableCell>{training.name}</TableCell>
                          <TableCell>{training.trainer}</TableCell>
                          <TableCell>{training.category}</TableCell>
                          <TableCell>${training.price.toFixed(2)}</TableCell>
                          <TableCell>{`${training.enrolled}/${training.maxCapacity}`}</TableCell>
                          <TableCell>
                            <Chip
                              label={training.status}
                              color={
                                training.status === 'Active' ? 'success' :
                                  training.status === 'Almost Full' ? 'warning' :
                                    'error'
                              }
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <IconButton size="small" color="primary">
                              <Edit fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color="error">
                              <Delete fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="admin dashboard tabs"
        >
          <Tab icon={<Dashboard />} label="Dashboard" />
          <Tab icon={<PeopleAlt />} label="Users" />
          <Tab icon={<ShoppingBag />} label="Products" />
          <Tab icon={<ShoppingBag />} label="Orders" />
          <Tab icon={<ShoppingBag />} label="Training" />
          <Tab icon={<ShoppingBag />} label="Blog" />
        </Tabs>
      </Paper>

      {renderTabContent()}
    </Container>
  );
};

export default AdminDashboard; 