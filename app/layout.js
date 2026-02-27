'use client';

import { Inter } from 'next/font/google';
import { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { luxoraTheme } from '@/theme/theme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [cartCount, setCartCount] = useState(3);

  const handleCartClick = () => {
    console.log('Cart clicked');
  };

  return (
    <html lang="en">
      <head>
        <title>Luxora | Premium Curated Collection</title>
        <meta name="description" content="Discover our handpicked collection of premium products designed for those who appreciate quality, simplicity, and timeless elegance." />
        <meta name="keywords" content="luxury, e-commerce, premium products, minimalist design" />
        <meta property="og:title" content="Luxora | Premium Curated Collection" />
        <meta property="og:description" content="Discover our handpicked collection of premium products" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={luxoraTheme}>
          <CssBaseline />
          <Box sx={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
            {/* Navigation appears on every page */}
            <Navigation 
              cartCount={cartCount} 
              onCartClick={handleCartClick} 
            />

            {/* Page content */}
            <Box>
              {children}
            </Box>

            {/* Footer appears on every page */}
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}