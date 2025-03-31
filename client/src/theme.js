import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance with Indian-inspired color palette
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      // Deep saffron - inspired by Indian flag
      main: '#FF8F1C',
      light: '#FFA94D',
      dark: '#E67300',
      contrastText: '#ffffff',
    },
    secondary: {
      // Peacock blue - inspired by national bird
      main: '#0E7490',
      light: '#38B2AC',
      dark: '#065666',
      contrastText: '#ffffff',
    },
    success: {
      // India green from flag
      main: '#008852',
      light: '#4CAF50',
      dark: '#006837',
    },
    error: {
      // Sindoor red - traditional Indian color
      main: '#E53E3E',
      light: '#FC8181',
      dark: '#C53030',
    },
    warning: {
      // Turmeric yellow
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
    },
    info: {
      // Lighter blue inspired by Jodhpur
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
      disabled: '#94A3B8',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.85rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.65rem',
      lineHeight: 1.2,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.35rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.15rem',
      lineHeight: 1.2,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.95rem',
      lineHeight: 1.5,
      letterSpacing: '0.00714em',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.5,
      letterSpacing: '0.01071em',
    },
    button: {
      fontSize: '0.95rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.85rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontSize: '0.85rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          overflowX: 'hidden',
        },
        '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '4px',
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.75rem',
          boxShadow: 'none',
          padding: '0.7rem 1.5rem',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#E67300',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
        sizeLarge: {
          padding: '0.85rem 2rem',
          fontSize: '1.1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
          },
          // Add decorative border inspired by Indian patterns
          border: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '1.65rem 1.65rem 0.85rem',
        },
        title: {
          fontSize: '1.35rem',
          fontWeight: 600,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '1.65rem',
          '&:last-child': {
            paddingBottom: '1.65rem',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          '@media (min-width: 600px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@media (min-width: 1200px)': {
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
          },
        },
        maxWidthXl: {
          maxWidth: '1920px !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.75rem',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FF8F1C',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: '#FF8F1C',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        colorDefault: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '5px 0 15px rgba(0, 0, 0, 0.05)',
          width: '320px !important',
          // Add subtle pattern background inspired by Indian designs
          backgroundImage: 'linear-gradient(45deg, rgba(255, 143, 28, 0.02) 25%, transparent 25%, transparent 50%, rgba(255, 143, 28, 0.02) 50%, rgba(255, 143, 28, 0.02) 75%, transparent 75%, transparent)',
          backgroundSize: '20px 20px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem',
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 143, 28, 0.1)',
            '& .MuiListItemIcon-root': {
              color: '#FF8F1C',
            },
            '& .MuiListItemText-primary': {
              fontWeight: 600,
              color: '#FF8F1C',
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.75rem',
          transition: 'all 0.2s ease',
          padding: '1rem 1.25rem',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            transform: 'translateX(4px)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 143, 28, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 143, 28, 0.15)',
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '52px',
          '& > svg': {
            fontSize: '1.5rem',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '1.05rem',
          fontWeight: 500,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '1.25rem 1.5rem',
          borderColor: 'rgba(0, 0, 0, 0.08)',
        },
        head: {
          fontWeight: 600,
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '76px !important',
          padding: '0 1.5rem',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          width: '42px !important',
          height: '42px !important',
          fontSize: '1.25rem',
          // Add subtle border inspired by Indian jewelry
          border: '2px solid rgba(255, 143, 28, 0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        elevation2: {
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: '1.05rem',
        },
        separator: {
          fontSize: '1.05rem',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: '1rem',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '0.85rem 1.25rem',
          fontSize: '1.05rem',
        },
      },
    },
    // Add Badge styling with Indian-inspired colors
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 600,
        },
        colorError: {
          backgroundColor: '#E53E3E',
        },
        colorPrimary: {
          backgroundColor: '#FF8F1C',
        },
        colorSecondary: {
          backgroundColor: '#0E7490',
        },
      }
    },
  },
  mixins: {
    toolbar: {
      minHeight: 76,
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export default theme; 