import React, { useState } from 'react';
import { Outlet, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Badge,
  Container,
  Paper,
  Breadcrumbs,
  Link,
  CssBaseline,
  Tooltip,
  Button,
  alpha
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ShoppingBag as ProductsIcon,
  ShoppingCart as OrdersIcon,
  Settings as SettingsIcon,
  BarChart as AnalyticsIcon,
  EventNote as EventsIcon,
  Person as ProfileIcon,
  Notifications as NotificationsIcon,
  ExitToApp as LogoutIcon,
  ChevronLeft as ChevronLeftIcon,
  NavigateNext as NavigateNextIcon,
  Home as HomeIcon,
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon
} from '@mui/icons-material';

const AdminLayout = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const [open, setOpen] = useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);

  // Calculate drawer width based on screen size
  const drawerWidth = isLargeScreen ? 320 : isMobile ? '100%' : 280;

  // Update drawer state when screen size changes
  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsOpen = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  const handleLogout = () => {
    // Add logout logic here
    handleProfileMenuClose();
    navigate('/login');
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { text: 'Users', icon: <PeopleIcon />, path: '/admin/users' },
    { text: 'Products', icon: <ProductsIcon />, path: '/admin/products' },
    { text: 'Orders', icon: <OrdersIcon />, path: '/admin/orders' },
    { text: 'Events', icon: <EventsIcon />, path: '/admin/events' },
    { text: 'Analytics', icon: <AnalyticsIcon />, path: '/admin/analytics' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/admin/settings' },
  ];

  const notifications = [
    { id: 1, content: 'New user registered: John Smith', time: '10 minutes ago' },
    { id: 2, content: 'New order #5678 received', time: '1 hour ago' },
    { id: 3, content: 'Payment issue with order #5623', time: '3 hours ago' },
    { id: 4, content: 'Low stock alert: Protein Powder', time: '1 day ago' },
  ];

  // Determine current page title for breadcrumbs
  const getCurrentPageTitle = () => {
    const currentPath = location.pathname;
    const currentMenuItem = menuItems.find(item => item.path === currentPath);
    return currentMenuItem ? currentMenuItem.text : 'Dashboard';
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%', bgcolor: 'background.default' }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{
          width: { md: open ? `calc(100% - ${drawerWidth}px)` : '100%' },
          ml: { md: open ? `${drawerWidth}px` : 0 },
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          bgcolor: 'background.paper',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
        }}
      >
        <Toolbar sx={{
          py: { xs: theme.spacing(1), md: theme.spacing(0) },
          px: { xs: theme.spacing(1), sm: theme.spacing(2) },
          height: { xs: '70px', md: '80px', lg: '90px' }
        }}>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              marginRight: theme.spacing(2),
              color: 'text.primary'
            }}
          >
            {open && !isMobile ? <ChevronLeftIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </IconButton>

          <Typography
            variant="h5"
            component={RouterLink}
            to="/admin"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', md: '1.75rem', lg: '1.85rem' }
            }}
          >
            Admin Panel
          </Typography>

          {/* Quick Actions (visible on large screens) */}
          {!isMobile && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                mr: theme.spacing(3),
                display: { xs: 'none', lg: 'flex' },
                borderRadius: '10px',
                px: theme.spacing(2),
                py: theme.spacing(1.25),
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                }
              }}
            >
              New Product
            </Button>
          )}

          {/* Visit Website */}
          {!isMobile && (
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              startIcon={<HomeIcon />}
              sx={{
                mr: theme.spacing(3),
                display: { xs: 'none', lg: 'flex' },
                borderRadius: '10px',
                px: theme.spacing(2),
                py: theme.spacing(1),
                bgcolor: 'background.alternate',
                '&:hover': {
                  bgcolor: 'rgba(14, 165, 233, 0.08)',
                }
              }}
            >
              Visit Website
            </Button>
          )}

          {/* Notifications */}
          <Tooltip title="Notifications" arrow>
            <IconButton
              color="inherit"
              onClick={handleNotificationsOpen}
              sx={{
                mx: theme.spacing(1),
                p: { xs: theme.spacing(1), md: theme.spacing(1.25) },
                bgcolor: 'background.alternate',
                '&:hover': {
                  bgcolor: 'rgba(14, 165, 233, 0.08)',
                }
              }}
            >
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }} />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Profile */}
          <Tooltip title="Admin Profile" arrow>
            <IconButton
              color="inherit"
              onClick={handleProfileMenuOpen}
              sx={{
                ml: theme.spacing(1),
                p: { xs: theme.spacing(0.5), md: theme.spacing(0.75) },
                bgcolor: 'background.alternate',
                '&:hover': {
                  bgcolor: 'rgba(14, 165, 233, 0.08)',
                }
              }}
              aria-controls="profile-menu"
              aria-haspopup="true"
            >
              <Avatar sx={{
                width: { xs: 38, sm: 44, lg: 48 },
                height: { xs: 38, sm: 44, lg: 48 },
                bgcolor: 'secondary.main',
                border: '2px solid white'
              }}>
                A
              </Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 3,
          sx: {
            borderRadius: '12px',
            mt: 1.5,
            width: 220,
            '& .MuiMenuItem-root': {
              py: 1.5
            }
          }
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Admin User</Typography>
          <Typography variant="body2" color="text.secondary">admin@fitnexus.com</Typography>
        </Box>
        <Divider />
        <MenuItem component={RouterLink} to="/admin/profile">
          <ListItemIcon>
            <ProfileIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </MenuItem>
        <MenuItem component={RouterLink} to="/admin/settings">
          <ListItemIcon>
            <SettingsIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText primary="Logout" primaryTypographyProps={{ color: 'error' }} />
        </MenuItem>
      </Menu>

      {/* Notifications Menu */}
      <Menu
        id="notifications-menu"
        anchorEl={notificationsAnchorEl}
        open={Boolean(notificationsAnchorEl)}
        onClose={handleNotificationsClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 3,
          sx: {
            width: { xs: '100%', sm: 360 },
            maxWidth: { xs: '100%', sm: 360 },
            maxHeight: { xs: '80vh', sm: 500 },
            borderRadius: '12px',
            mt: 1.5
          }
        }}
      >
        <Box sx={{
          px: theme.spacing(2),
          py: theme.spacing(1.5),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Notifications
          </Typography>
          <Link
            component="button"
            underline="none"
            color="secondary"
            onClick={handleNotificationsClose}
            sx={{ fontWeight: 500 }}
          >
            Mark all as read
          </Link>
        </Box>

        <Box sx={{ maxHeight: 350, overflow: 'auto' }}>
          {notifications.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={handleNotificationsClose}
              sx={{
                py: theme.spacing(2),
                borderLeft: notification.id === 1 ? '3px solid #f43f5e' : 'none',
                bgcolor: notification.id === 1 ? alpha(theme.palette.secondary.light, 0.1) : 'transparent',
                '&:hover': {
                  bgcolor: alpha(theme.palette.secondary.light, 0.08)
                }
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body2" sx={{ fontWeight: notification.id === 1 ? 600 : 400 }}>
                  {notification.content}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                  {notification.time}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Box>

        <Divider />
        <Box sx={{ p: 1, textAlign: 'center' }}>
          <Button
            color="secondary"
            onClick={handleNotificationsClose}
            sx={{ width: '100%', py: 1 }}
          >
            View all notifications
          </Button>
        </Box>
      </Menu>

      {/* Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
            border: 'none'
          },
          display: { xs: open ? 'block' : 'none', md: 'block' }
        }}
      >
        <Toolbar sx={{
          py: { xs: theme.spacing(1), md: theme.spacing(0) },
          px: { xs: theme.spacing(1), sm: theme.spacing(2) },
          height: { xs: '70px', md: '80px', lg: '90px' }
        }} />

        <Box sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          px: theme.spacing(2),
          py: theme.spacing(2)
        }}>
          {/* Admin Profile Summary */}
          <Paper sx={{
            p: theme.spacing(3),
            borderRadius: '16px',
            mb: theme.spacing(3),
            backgroundImage: `linear-gradient(to right, ${alpha(theme.palette.secondary.light, 0.05)}, ${alpha(theme.palette.secondary.main, 0.15)})`,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: theme.spacing(2) }}>
              <Avatar sx={{
                width: { xs: 60, sm: 70 },
                height: { xs: 60, sm: 70 },
                bgcolor: 'secondary.main',
                mr: theme.spacing(2),
                fontSize: '1.75rem',
                border: '4px solid white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}>
                A
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Admin User
                </Typography>
                <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600 }}>
                  Super Admin
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ my: theme.spacing(2) }} />
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: theme.spacing(1)
            }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" color="secondary.main">25</Typography>
                <Typography variant="body2" color="text.secondary">Users</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" color="secondary.main">42</Typography>
                <Typography variant="body2" color="text.secondary">Products</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" color="secondary.main">18</Typography>
                <Typography variant="body2" color="text.secondary">Orders</Typography>
              </Box>
            </Box>
          </Paper>

          {/* Navigation Menu */}
          <Typography
            variant="overline"
            sx={{
              ml: theme.spacing(2),
              mb: theme.spacing(1),
              color: 'text.secondary',
              fontWeight: 600
            }}
          >
            Admin Controls
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: theme.spacing(0.75) }}>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  selected={location.pathname === item.path}
                  sx={{
                    py: theme.spacing(1.5),
                    px: theme.spacing(2),
                    borderRadius: '12px',
                    '&.Mui-selected': {
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                      }
                    },
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                      transform: 'translateX(5px)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <ListItemIcon sx={{
                    minWidth: theme.spacing(5.5),
                    color: location.pathname === item.path ? 'white' : 'secondary.main',
                    '& svg': {
                      fontSize: '1.5rem'
                    }
                  }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '1.05rem',
                      fontWeight: location.pathname === item.path ? 600 : 500
                    }}
                  />
                  {item.path === location.pathname && (
                    <Box
                      sx={{
                        width: 4,
                        height: 32,
                        bgcolor: 'white',
                        borderRadius: 4,
                        ml: 1
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ flexGrow: 1 }} />

          {/* Status Section */}
          <Paper sx={{
            p: theme.spacing(2),
            borderRadius: '12px',
            mb: theme.spacing(3),
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.04)'
          }}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
              System Status
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Server
              </Typography>
              <Typography variant="body2" color="success.main" fontWeight={600}>
                Online
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Last Backup
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                2h ago
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" color="text.secondary">
                Storage
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                68%
              </Typography>
            </Box>
          </Paper>

          {/* Logout */}
          <Box sx={{ px: theme.spacing(1), mb: theme.spacing(2) }}>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                py: theme.spacing(1.25),
                borderRadius: '12px',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                  bgcolor: alpha(theme.palette.error.main, 0.05),
                }
              }}
            >
              Log Out
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          pt: { xs: theme.spacing(10), sm: theme.spacing(10), md: theme.spacing(12) },
          pb: theme.spacing(5),
          px: { xs: theme.spacing(2), sm: theme.spacing(3), md: theme.spacing(4) },
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ml: { md: open ? 0 : `-${drawerWidth}px` },
        }}
      >
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{
              mb: theme.spacing(3),
              '& .MuiBreadcrumbs-ol': {
                alignItems: 'center',
              },
              '& .MuiBreadcrumbs-li': {
                fontSize: '1.1rem',
              }
            }}
          >
            <Link
              color="inherit"
              component={RouterLink}
              to="/admin"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              <DashboardIcon sx={{ mr: 0.5, fontSize: '1.25rem' }} />
              Dashboard
            </Link>
            {location.pathname !== '/admin' && (
              <Typography color="text.primary" fontWeight={600}>
                {getCurrentPageTitle()}
              </Typography>
            )}
          </Breadcrumbs>

          {/* Page Header */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: theme.spacing(4),
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 600,
                color: 'text.primary'
              }}
            >
              {getCurrentPageTitle()}
            </Typography>

            {/* Action Buttons - Mobile Only */}
            {isMobile && (
              <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                size="medium"
                sx={{
                  borderRadius: '10px',
                }}
              >
                New {getCurrentPageTitle().slice(0, -1)}
              </Button>
            )}
          </Box>

          {/* Content */}
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default AdminLayout; 