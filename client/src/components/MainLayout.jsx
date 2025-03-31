import React, { useState, useContext } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  CssBaseline,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  alpha
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  FitnessCenter as WorkoutIcon,
  People as TeamIcon,
  ShoppingBag as ShopIcon,
  ShoppingCart as CartIcon,
  Event as EventsIcon,
  Article as BlogIcon,
  Info as AboutIcon,
  Email as ContactIcon,
  Login as LoginIcon,
  Person as ProfileIcon,
  Dashboard as DashboardIcon,
  Close as CloseIcon,
  Notifications as NotificationsIcon,
  LocalOffer as OfferIcon
} from '@mui/icons-material';
import Footer from './Footer';
import { AppContext } from '../context/AppContext';

// Dynamic menu items - can be loaded from API or config file
const DEFAULT_MENU_ITEMS = [
  { text: 'Home', path: '/', icon: <HomeIcon /> },
  { text: 'Training', path: '/training', icon: <WorkoutIcon /> },
  { text: 'Shop', path: '/shop', icon: <ShopIcon /> },
  { text: 'Classes', path: '/classes', icon: <EventsIcon /> },
  { text: 'Team', path: '/team', icon: <TeamIcon /> },
  { text: 'Blog', path: '/blog', icon: <BlogIcon /> },
  { text: 'About', path: '/about', icon: <AboutIcon /> },
  { text: 'Contact', path: '/contact', icon: <ContactIcon /> }
];

const MainLayout = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);

  // Get global context data - in a real app, this would come from context
  // This is a placeholder - you'll need to implement your AppContext
  const {
    isAuthenticated = false,
    userData = { name: 'Guest', email: 'guest@example.com' },
    cartItems = [],
    notifications = [],
    siteInfo = {
      name: 'FitNexus',
      slogan: 'Lucknow\'s Premier Fitness Destination',
      logo: null // Could be an image path
    },
    menuItems = DEFAULT_MENU_ITEMS
  } = useContext(AppContext) || {};

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
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

  const handleCartOpen = (event) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  // Dynamic drawer width based on screen size
  const drawerWidth = isLargeScreen ? 280 : isMobile ? '100%' : 250;

  // Calculate cart totals dynamically
  const calculateCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  // Get cart item count
  const getCartItemCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: theme.spacing(2)
      }}
      role="presentation"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: theme.spacing(3) }}>
        <Typography
          variant="h5"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', md: '1.75rem' }
          }}
        >
          {siteInfo.name}
        </Typography>
        {isMobile && (
          <IconButton onClick={toggleDrawer} edge="end" aria-label="close drawer">
            <CloseIcon fontSize="large" />
          </IconButton>
        )}
      </Box>

      <Divider sx={{ mb: theme.spacing(2) }} />

      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={isMobile ? toggleDrawer : undefined}
            sx={{
              mb: theme.spacing(0.75),
              py: theme.spacing(1.25),
              px: theme.spacing(2),
              borderRadius: '12px',
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
                '& .MuiListItemIcon-root': {
                  color: 'white',
                },
                '&:hover': {
                  backgroundColor: 'primary.dark',
                }
              },
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                transform: 'translateX(5px)',
              },
              transition: 'all 0.2s ease-in-out'
            }}
          >
            <ListItemIcon sx={{
              minWidth: theme.spacing(5),
              color: location.pathname === item.path ? 'white' : 'primary.main',
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
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: theme.spacing(2) }} />

      <Box sx={{ mb: theme.spacing(2) }}>
        {isAuthenticated ? (
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard"
            startIcon={<DashboardIcon />}
            fullWidth
            sx={{
              py: theme.spacing(1.25),
              borderRadius: '12px',
              mb: theme.spacing(1.5),
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            My Dashboard
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              component={RouterLink}
              to="/login"
              startIcon={<LoginIcon />}
              fullWidth
              sx={{
                py: theme.spacing(1.25),
                borderRadius: '12px',
                mb: theme.spacing(1.5),
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 8px rgba(14, 165, 233, 0.15)'
              }}
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/register"
              startIcon={<ProfileIcon />}
              fullWidth
              sx={{
                py: theme.spacing(1.25),
                borderRadius: '12px',
                textTransform: 'none',
                borderWidth: '2px',
                fontWeight: 600,
                '&:hover': {
                  borderWidth: '2px',
                  bgcolor: alpha(theme.palette.primary.main, 0.05)
                }
              }}
            >
              Register
            </Button>
          </>
        )}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', bgcolor: 'background.default' }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          bgcolor: 'background.paper'
        }}
      >
        <Toolbar sx={{
          py: { xs: theme.spacing(1), md: theme.spacing(0) },
          px: { xs: theme.spacing(1), sm: theme.spacing(3), lg: theme.spacing(4) },
          height: { xs: '70px', md: '80px', lg: '90px' },
          maxWidth: '1920px',
          width: '100%',
          mx: 'auto'
        }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              mr: { md: theme.spacing(5) },
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', md: '1.75rem', lg: '1.85rem' }
            }}
          >
            {siteInfo.name}
          </Typography>

          {/* Menu Items - Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                sx={{
                  mx: theme.spacing(0.5),
                  px: theme.spacing(1.5),
                  py: theme.spacing(1),
                  position: 'relative',
                  fontSize: { md: '0.9rem', lg: '1rem' },
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontWeight: location.pathname === item.path ? 600 : 500,
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',

                  '&::after': location.pathname === item.path ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: '35%',
                    width: '30%',
                    height: 3,
                    backgroundColor: 'primary.main',
                    borderRadius: '2px'
                  } : {},

                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.05),
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '35%',
                      width: '30%',
                      height: 3,
                      backgroundColor: 'primary.main',
                      borderRadius: '2px'
                    }
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Action buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Hot Offers */}
            {!isMobile && (
              <Button
                variant="contained"
                color="error"
                startIcon={<OfferIcon />}
                sx={{
                  mr: theme.spacing(2),
                  display: { xs: 'none', lg: 'flex' },
                  borderRadius: '10px',
                  px: theme.spacing(2),
                  py: theme.spacing(1),
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: '0 4px 8px rgba(239, 68, 68, 0.15)'
                }}
              >
                Special Offers
              </Button>
            )}

            {/* Cart Icon */}
            <Tooltip title="Shopping Cart" arrow>
              <IconButton
                color="inherit"
                aria-label="cart"
                onClick={handleCartOpen}
                sx={{
                  mr: { xs: theme.spacing(1), md: theme.spacing(2) },
                  p: { xs: theme.spacing(1), md: theme.spacing(1.25) },
                  bgcolor: 'background.alternate',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.08)
                  }
                }}
              >
                <Badge badgeContent={getCartItemCount()} color="error">
                  <CartIcon sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }} />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* Notifications */}
            {isAuthenticated && (
              <Tooltip title="Notifications" arrow>
                <IconButton
                  color="inherit"
                  aria-label="notifications"
                  onClick={handleNotificationsOpen}
                  sx={{
                    mr: { xs: theme.spacing(1), md: theme.spacing(2) },
                    p: { xs: theme.spacing(1), md: theme.spacing(1.25) },
                    bgcolor: 'background.alternate',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.08)
                    }
                  }}
                >
                  <Badge badgeContent={notifications.length} color="error">
                    <NotificationsIcon sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }} />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}

            {/* Profile Menu or Auth Buttons */}
            {isAuthenticated ? (
              <Tooltip title="My Profile" arrow>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="account"
                  onClick={handleProfileMenuOpen}
                  sx={{
                    p: { xs: theme.spacing(0.5), md: theme.spacing(0.75) },
                    bgcolor: 'background.alternate',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.08)
                    }
                  }}
                >
                  <Avatar sx={{
                    width: { xs: 38, sm: 44, lg: 48 },
                    height: { xs: 38, sm: 44, lg: 48 },
                    bgcolor: 'primary.main',
                    border: '2px solid white'
                  }}>
                    {userData.name ? userData.name.charAt(0) : 'U'}
                  </Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="outlined"
                  startIcon={<LoginIcon />}
                  sx={{
                    mr: theme.spacing(1.5),
                    borderRadius: '10px',
                    px: theme.spacing(2),
                    py: theme.spacing(1),
                    borderWidth: '2px',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      borderWidth: '2px',
                      bgcolor: alpha(theme.palette.primary.main, 0.05)
                    }
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  startIcon={<ProfileIcon />}
                  sx={{
                    borderRadius: '10px',
                    px: theme.spacing(2),
                    py: theme.spacing(1),
                    textTransform: 'none',
                    fontWeight: 600,
                    boxShadow: '0 4px 8px rgba(14, 165, 233, 0.15)'
                  }}
                >
                  Register
                </Button>
              </Box>
            )}

            {/* Mobile Menu Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer}
              sx={{
                display: { md: 'none' },
                ml: theme.spacing(1),
                p: { xs: theme.spacing(1), sm: theme.spacing(1.25) },
              }}
            >
              <MenuIcon sx={{ fontSize: '1.75rem' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Menu */}
      {isAuthenticated && (
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
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
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{userData.name}</Typography>
            <Typography variant="body2" color="text.secondary">{userData.email}</Typography>
          </Box>
          <Divider />
          <MenuItem component={RouterLink} to="/dashboard" onClick={handleProfileMenuClose}>
            <ListItemIcon>
              <DashboardIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </MenuItem>
          <MenuItem component={RouterLink} to="/dashboard/profile" onClick={handleProfileMenuClose}>
            <ListItemIcon>
              <ProfileIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </MenuItem>
          <Divider />
          <MenuItem component={RouterLink} to="/login" onClick={handleProfileMenuClose}>
            <ListItemIcon>
              <LoginIcon fontSize="small" color="error" />
            </ListItemIcon>
            <ListItemText primary="Logout" primaryTypographyProps={{ color: 'error' }} />
          </MenuItem>
        </Menu>
      )}

      {/* Notifications Menu */}
      <Menu
        id="notifications-menu"
        anchorEl={notificationsAnchorEl}
        keepMounted
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
          <Button
            color="primary"
            size="small"
            sx={{ fontWeight: 500, textTransform: 'none' }}
          >
            Mark all as read
          </Button>
        </Box>

        <Box sx={{ maxHeight: 350, overflow: 'auto' }}>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <MenuItem
                key={notification.id || index}
                onClick={handleNotificationsClose}
                sx={{
                  py: theme.spacing(2),
                  borderLeft: index === 0 ? '3px solid #0ea5e9' : 'none',
                  bgcolor: index === 0 ? alpha(theme.palette.primary.main, 0.05) : 'transparent',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.08)
                  }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Typography variant="body2" sx={{ fontWeight: index === 0 ? 600 : 400 }}>
                    {notification.content}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                    {notification.time}
                  </Typography>
                </Box>
              </MenuItem>
            ))
          ) : (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                No notifications yet
              </Typography>
            </Box>
          )}
        </Box>

        {notifications.length > 0 && (
          <>
            <Divider />
            <Box sx={{ p: 1, textAlign: 'center' }}>
              <Button
                color="primary"
                onClick={handleNotificationsClose}
                fullWidth
                sx={{ py: 1, textTransform: 'none' }}
              >
                View all notifications
              </Button>
            </Box>
          </>
        )}
      </Menu>

      {/* Cart Menu */}
      <Menu
        id="cart-menu"
        anchorEl={cartAnchorEl}
        keepMounted
        open={Boolean(cartAnchorEl)}
        onClose={handleCartClose}
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
            Shopping Cart ({getCartItemCount()} items)
          </Typography>
        </Box>

        <Box sx={{ maxHeight: 350, overflow: 'auto' }}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <MenuItem
                key={item.id || index}
                sx={{
                  py: theme.spacing(2),
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.05)
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Qty: {item.quantity} x ₹{item.price}
                    </Typography>
                  </Box>
                  <Typography variant="body2" fontWeight="bold" color="primary.main">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </MenuItem>
            ))
          ) : (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Your cart is empty
              </Typography>
            </Box>
          )}
        </Box>

        {cartItems.length > 0 && (
          <>
            <Divider />
            <Box sx={{ p: theme.spacing(2) }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: theme.spacing(2) }}>
                <Typography variant="subtitle2">Subtotal:</Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  ₹{calculateCartTotal()}
                </Typography>
              </Box>
              <Button
                variant="contained"
                component={RouterLink}
                to="/checkout"
                onClick={handleCartClose}
                fullWidth
                sx={{
                  mb: theme.spacing(1.5),
                  py: theme.spacing(1.25),
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                Checkout
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/cart"
                onClick={handleCartClose}
                fullWidth
                sx={{
                  py: theme.spacing(1.25),
                  borderRadius: '10px',
                  borderWidth: '2px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                View Cart
              </Button>
            </Box>
          </>
        )}
      </Menu>

      {/* Drawer - Mobile Navigation */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
            border: 'none'
          },
          display: { md: 'none' }
        }}
      >
        {drawer}
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          pt: { xs: theme.spacing(11), sm: theme.spacing(12), md: theme.spacing(13), lg: theme.spacing(14) },
          pb: theme.spacing(4)
        }}
      >
        <Container maxWidth={false} sx={{
          px: { xs: theme.spacing(2), sm: theme.spacing(3), lg: theme.spacing(4) },
          maxWidth: '1920px'
        }}>
          <Outlet />
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout; 