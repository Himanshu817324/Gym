import React, { useContext } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
  Button,
  TextField,
  InputAdornment
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Footer = () => {
  const { siteInfo, menuItems } = useContext(AppContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'Our Team', url: '/team' },
        { name: 'Careers', url: '/careers' },
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Personal Training', url: '/training' },
        { name: 'Group Classes', url: '/training' },
        { name: 'Nutrition Consulting', url: '/training' },
        { name: 'Shop Equipment', url: '/shop' },
        { name: 'Membership Plans', url: '/membership' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', url: '/contact' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Help Center', url: '/help' },
        { name: 'Blog', url: '/blog' },
        { name: 'Community', url: '/community' }
      ]
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 8 },
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 -5px 15px rgba(0, 0, 0, 0.02)'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4} lg={4}>
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'text.primary',
                fontWeight: 'bold',
                display: 'block',
                mb: 2
              }}
            >
              {siteInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {siteInfo.description || 'FitNexus combines traditional Indian wellness practices with modern fitness science, offering a unique approach to health in the heart of Lucknow.'}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {siteInfo.address || '123 Hazratganj, Lucknow, Uttar Pradesh 226001'}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon color="primary" sx={{ mr: 1 }} />
              <Link href={`tel:${siteInfo.phone?.replace(/\s+/g, '') || '+915221234567'}`} color="inherit" underline="hover">
                <Typography variant="body2" color="text.secondary">
                  {siteInfo.phone || '+91 522 123 4567'}
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon color="primary" sx={{ mr: 1 }} />
              <Link href={`mailto:${siteInfo.email || 'info@fitnexus.com'}`} color="inherit" underline="hover">
                <Typography variant="body2" color="text.secondary">
                  {siteInfo.email || 'info@fitnexus.com'}
                </Typography>
              </Link>
            </Box>

            <Box sx={{ mt: 3 }}>
              <IconButton
                aria-label="Facebook"
                component="a"
                href={siteInfo.socialLinks?.facebook || 'https://facebook.com'}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 2, bgcolor: 'rgba(14, 165, 233, 0.1)', color: 'primary.main' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                component="a"
                href={siteInfo.socialLinks?.twitter || 'https://twitter.com'}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 2, bgcolor: 'rgba(14, 165, 233, 0.1)', color: 'primary.main' }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                component="a"
                href={siteInfo.socialLinks?.instagram || 'https://instagram.com'}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 2, bgcolor: 'rgba(14, 165, 233, 0.1)', color: 'primary.main' }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                component="a"
                href={siteInfo.socialLinks?.youtube || 'https://youtube.com'}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ bgcolor: 'rgba(14, 165, 233, 0.1)', color: 'primary.main' }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {menuItems.slice(0, 6).map((item) => (
                <Link
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  underline="hover"
                  sx={{
                    mb: 1.5,
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.2s'
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {(siteInfo.specialFeatures || [
                'Traditional Indian Wrestling (Kushti) Training',
                'Yoga and Meditation Classes',
                'Modern Gym Equipment',
                'Lucknowi Cuisine Nutrition Guidance'
              ]).map((service, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  color="inherit"
                  underline="hover"
                  sx={{
                    mb: 1.5,
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.2s'
                  }}
                >
                  {service}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Stay updated with our latest fitness tips, new classes, and special offers from FitNexus .
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                mb: 3,
                gap: { xs: 2, sm: 0 }
              }}
            >
              <TextField
                fullWidth
                placeholder="Your Email Address"
                variant="outlined"
                size="medium"
                InputProps={{
                  sx: {
                    borderTopRightRadius: { sm: 0 },
                    borderBottomRightRadius: { sm: 0 },
                    bgcolor: 'background.default'
                  }
                }}
              />
              <Button
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
                sx={{
                  borderTopLeftRadius: { sm: 0 },
                  borderBottomLeftRadius: { sm: 0 },
                  px: { xs: 3, sm: 4 },
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from FitNexus .
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* Bottom Footer */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} {siteInfo.name}. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, flexWrap: 'wrap', gap: 2 }}>
              <Link component={RouterLink} to="/privacy-policy" color="inherit" underline="hover" sx={{ color: 'text.secondary' }}>
                Privacy Policy
              </Link>
              <Link component={RouterLink} to="/terms-of-service" color="inherit" underline="hover" sx={{ color: 'text.secondary' }}>
                Terms of Service
              </Link>
              <Link component={RouterLink} to="/cookie-policy" color="inherit" underline="hover" sx={{ color: 'text.secondary' }}>
                Cookie Policy
              </Link>
              <Link component={RouterLink} to="/sitemap" color="inherit" underline="hover" sx={{ color: 'text.secondary' }}>
                Sitemap
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;