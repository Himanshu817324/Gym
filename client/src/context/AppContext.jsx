import React, { createContext, useState, useEffect } from 'react';
import {
  Home as HomeIcon,
  FitnessCenter as WorkoutIcon,
  People as TeamIcon,
  ShoppingBag as ShopIcon,
  Event as EventsIcon,
  Article as BlogIcon,
  Info as AboutIcon,
  Email as ContactIcon
} from '@mui/icons-material';

// Create context
export const AppContext = createContext();

// AppProvider component
export const AppProvider = ({ children }) => {
  // State for authenticated user
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State for user data
  const [userData, setUserData] = useState({
    name: 'Guest',
    email: 'guest@example.com',
    avatar: null,
    role: 'guest',
  });

  // State for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Premium Yoga Mat', price: 1299.99, quantity: 1, image: '/assets/products/yoga-mat.jpg' },
    { id: 2, name: 'Ayurvedic Protein Powder', price: 1499.99, quantity: 2, image: '/assets/products/protein-powder.jpg' }
  ]);

  // State for notifications
  const [notifications, setNotifications] = useState([
    { id: 1, content: 'New fitness session available!', time: '5 minutes ago' },
    { id: 2, content: '20% off on all Lucknow special supplements', time: '1 hour ago' }
  ]);

  const siteInfo = {
    name: 'FitNexus ',
    slogan: 'Lucknow\'s Premier Fitness Destination',
    address: '123 Hazratganj, Lucknow, Uttar Pradesh 226001',
    phone: '+91 522 123 4567',
    email: 'info@fitnexus.com',
    socialLinks: {
      facebook: 'https://facebook.com/fitnexus',
      instagram: 'https://instagram.com/fitnexus',
      twitter: 'https://twitter.com/fitnexus',
      youtube: 'https://youtube.com/fitnexus',
    },
    logo: null,
    founded: '2022',
    description: 'FitNexus combines traditional Indian wellness practices with modern fitness science, offering a unique approach to health in the heart of Lucknow.',
    specialFeatures: [
      'Traditional Indian Wrestling (Kushti) Training',
      'Yoga and Meditation Classes',
      'Modern Gym Equipment',
      'Lucknowi Cuisine Nutrition Guidance'
    ]
  };

  // Navigation menu items - with actual icon components
  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Training', path: '/training', icon: <WorkoutIcon /> },
    { text: 'Shop', path: '/shop', icon: <ShopIcon /> },
    { text: 'Classes', path: '/classes', icon: <EventsIcon /> },
    { text: 'Team', path: '/team', icon: <TeamIcon /> },
    { text: 'Blog', path: '/blog', icon: <BlogIcon /> },
    { text: 'About', path: '/about', icon: <AboutIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactIcon /> }
  ];

  // Function to add item to cart
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Function to update item quantity
  const updateCartItemQuantity = (itemId, quantity) => {
    if (quantity < 1) return;

    const updatedCartItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );

    setCartItems(updatedCartItems);
  };

  // Function for user login
  const login = (user) => {
    setIsAuthenticated(true);
    setUserData(user);
    // In a real app, would handle JWT storage here
  };

  // Function for user logout
  const logout = () => {
    setIsAuthenticated(false);
    setUserData({
      name: 'Guest',
      email: 'guest@example.com',
      avatar: null,
      role: 'guest',
    });
    // In a real app, would clear JWT storage here
  };

  // Function to add notification
  const addNotification = (notification) => {
    setNotifications([notification, ...notifications]);
  };

  // Function to clear notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  // Function to mark all notifications as read
  const markAllNotificationsAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
  };

  // Fetch data from API (simulated)
  useEffect(() => {
    // In a real application, we would fetch this data from an API
    // This is just a placeholder to simulate API calls
    const fetchData = async () => {
      try {
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // This would be actual API calls in a real application
        console.log('Data loaded from API');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{
      isAuthenticated,
      userData,
      cartItems,
      notifications,
      siteInfo,
      menuItems,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      login,
      logout,
      addNotification,
      clearNotifications,
      markAllNotificationsAsRead
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider; 