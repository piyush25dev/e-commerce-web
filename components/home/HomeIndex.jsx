'use client';

import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import { luxoraTheme } from '@/theme/theme';
import Navigation from '../layout/Navigation';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from '../layout/Footer';

export default function EcommerceLanding() {
  const [cartCount, setCartCount] = useState(3);

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
    // You can add toast notifications here
    console.log(`Added ${product.name} to cart`);
  };

  const handleCartClick = () => {
    console.log('Cart clicked');
  };

  return (
    <ThemeProvider theme={luxoraTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
        {/* Navigation */}
        <Navigation cartCount={cartCount} onCartClick={handleCartClick} />

        {/* Hero Section */}
        <HeroSection />

        {/* Featured Products */}
        <FeaturedProducts onAddToCart={handleAddToCart} />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}